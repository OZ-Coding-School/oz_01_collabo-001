from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import EmailMessage
from django.core.cache import cache
from .serializers import BusinessUserEmail as UserEmail, BusinessUserTokenVerification as TokenVerification
from datetime import datetime
import uuid

# Create your views here.

class SendEmail(APIView):
    @staticmethod
    def generate_numeric_token():
        uuid_str = uuid.uuid4().hex  # UUID 생성
        # 16진수 문자열을 10진수로 변환하여 6자리의 숫자로 제한
        numeric_token = int(uuid_str, 16) % 900000 + 100000
        return numeric_token

    serializer_class = UserEmail
    def post(self, request):
        # 정보 직렬화
        serializer = UserEmail(data=request.data)
        if serializer.is_valid():
            user_email = request.data['email']  # user_email 입력값 받기
            current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')  # 메일 발송 당시의 시간정보
            token = self.generate_numeric_token() # 토큰 생성
            email_content = f'인증 코드: {token} 발송 시간 : {current_time}'  # 생성된 토큰을 이메일 내용에 포함
            email = EmailMessage(
                '사이트 인증 문자 입니다',
                email_content,
                to=[user_email]
            )
            try:
                email.send()  # 이메일 발송
                cache_timeout = 300  # 5분을 초 단위로 표현
                cache.set('user_token', token, timeout=cache_timeout) # django cache에 토큰저장
                cached_token = cache.get('user_token', default=None)
                print(cached_token)
                return Response({'message': 'Successfully sent the authentication email'}, status=status.HTTP_200_OK)  # 성공시 메세지 반환
            except Exception as e:
                return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)  # 실패시 에러내용 반환
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER)
    
class VerifyEmail(APIView):
    serializer_class = TokenVerification
    def post(self, request):
        token_serializer = TokenVerification(data=request.data)
        if token_serializer.is_valid():
            user_token = request.data['token'] # token 입력값 받기
            cached_token = cache.get('user_token', default=None) # 캐시에서 토큰 가져오기
            if cached_token is not None and user_token == cached_token:
                user_email = request.data['email'] # user_email 입력값 받기
                cache_timeout = 300 # 5분을 초 단위로 표현
                cache.set('user_email', user_email, timeout=cache_timeout) # django cache에 이메일 저장
                return Response({'message': 'Successfully verified the email'}, status=status.HTTP_200_OK) # 성공시 메세지 반환
            return Response({'message': 'Invalid verification code'}, status=status.HTTP_400_BAD_REQUEST) # 실패시 메세지 반환