from django.core.cache import cache
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import FreelancerUserSerializer
from .serializers import FreelancerUserSignUpSerializer as SignUpSerializer
from freelancer_emails.serializers import FreelancerUserEmailVerification as EmailVerification
from .models import FreelancerUser
from rest_framework import status
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.exceptions import NotFound


class UserDetail(APIView):
    def get(self, request, pk):
        freelancer = self.get_object(pk)
        serializer = FreelancerUserSerializer(freelancer)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def get_object(self, pk):
        try:
            return FreelancerUser.objects.get(pk=pk)
        except FreelancerUser.DoesNotExist:
            raise NotFound
        
    def delete(self, request, pk):
        freelancer = self.get_object(pk)
        freelancer.delete()
        return Response({'detail': '삭제 완료'}, status=status.HTTP_200_OK)
    
class SignUp(APIView):
    serializer_class = SignUpSerializer
    def post(self, request):
        try:
            # 이메일 인증 테이블에 유저가 입력한 email 데이터가 있는지 확인
            cached_email = cache.get('user_email', default=None)
            # cached_email = None -> 404 리턴
            if cached_email is None:
                return Response({'message': 'Please verify your email'}, status=status.HTTP_404_NOT_FOUND)
        except :
            # 없음 -> 404 리턴
            return Response({'message': 'Please verify your email'}, status=status.HTTP_404_NOT_FOUND)
        # 유저데이터 직렬화
        serializer = SignUpSerializer(data=request.data)

        try :
            # 직렬화된 데이터 검증
            if serializer.is_valid() and request.data['email'] == cached_email:
                # db에 유저 저장
                serializer.save()
                # 저장한 유저 가져오기
                user = FreelancerUser.objects.get(email=cached_email)
                # 해당 유저정보로 이메일 인증 테이블에 저장할 값 생성
                verified_email_data = {
                "email" : user.email,
                "user_index" : int(user.id),
                "is_verified" : True
                }
                # 인증내용 직렬화
                email_serializer = EmailVerification(data=verified_email_data)
                # 직렬화된 데이터 검증
                if email_serializer.is_valid():
                    # db에 인증정보 저장
                    email_serializer.save()
                    # 성공시 201 리턴
                    return Response({'message': 'Successfully SignUp!'}, status=status.HTTP_201_CREATED)
                # 이메일 검증 부분 validation 실패 -> 400 리턴
                return Response(email_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            # 유저 검증 부분 validation 성공, cached_email != 사용자 입력 -> 400 리턴
            elif serializer.is_valid():
                return Response({"message": "email didn't match"}, status=status.HTTP_400_BAD_REQUEST)
            # 유저 검증 부분 validation 실패, cached_email = 사용자 입력 -> 400 리턴
            elif request.data['email'] == cached_email:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({ "message" : str(e)}, status=status.HTTP_400_BAD_REQUEST)