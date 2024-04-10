from django.core.cache import cache
from django.contrib.auth import authenticate
from django.middleware.csrf import get_token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from .models import BusinessUser
<<<<<<< HEAD
from .serializers import BusinessUserSerializer, BusinessUserSignUpSerializer as SignUp, ChangePasswordSerializer
from business_emails.serializers import BusinessUserEmailVerification as EmailVerification
from .serializers import BusinessUserSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
=======
from .serializers import BusinessUserSerializer, BusinessUserSignUpSerializer as SignUpSerializer, BusinessUserloginSerializer as Login
from business_emails.serializers import BusinessUserEmailVerification as EmailVerification
from .serializers import BusinessUserSerializer
from django.shortcuts import get_object_or_404
>>>>>>> feature/login

class UserDetail(APIView):
    def get(self, request, pk):
        business_user = self.get_object(pk)
        serializer = BusinessUserSerializer(business_user)
        return Response(serializer.data)

    def get_object(self, pk):
        try:
            return BusinessUser.objects.get(pk=pk)
        except BusinessUser.DoesNotExist:
            raise NotFound

    def delete(self, request, pk):
        business_user = self.get_object(pk)
        business_user.delete()
        return Response(status=204)

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
                user = BusinessUser.objects.get(email=cached_email)
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



class ChangePasswordView(APIView):
    serializer_class = ChangePasswordSerializer
    # permission_classes = [IsAuthenticated]  # 인증된 사용자만 비밀번호 변경을 허용
    
    def put(self, request, pk):
        business_user = get_object_or_404(BusinessUser, pk=pk)
        serializer = ChangePasswordSerializer(data=request.data)

        if serializer.is_valid():
            new_password = serializer.validated_data.get('new_password')
            old_password = request.data.get('old_password')  # 기존 비밀번호를 요청 데이터에서 가져옴.

            # 기존 비밀번호와 신규 비밀번호가 일치하는지 확인.
            if business_user.check_password(old_password):
                # 일치할 경우에만 비밀번호를 변경하고 저장.
                business_user.set_password(new_password)
                business_user.save()
                return Response({'detail': '비밀번호가 성공적으로 변경되었습니다.'}, status=status.HTTP_200_OK)
            else:
                # 일치하지 않을 경우 변경을 거부하고 에러 메시지를 반환.
                return Response({'error': '기존 비밀번호가 일치하지 않습니다.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response({'error': '새로운 비밀번호가 제공되지 않았습니다!'}, status=status.HTTP_400_BAD_REQUEST)

class Login(APIView):
    serializer_class = Login
    def post(self, request):
        user_id = request.data['user_id']
        password = request.data['password']
        try :
            user = authenticate(username=user_id, password=password)
            if user is not None:
                token = RefreshToken.for_user(user)
                response_data = {'message': 'Login successful!'}
                response = Response(response_data)
                response.set_cookie(key='access-token', value=str(token.access_token), httponly=True)
                response.set_cookie(key='refrash-token', value=str(token), httponly=True)
                response.set_cookie(key='csrftoken', value=get_token(request), domain='127.0.0.1', path='/')
                return response
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except :
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
