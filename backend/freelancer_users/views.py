from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import FreelancerSerializer
from .models import Freelancer
from rest_framework import status

class CheckUserId(APIView):
    def post(self, request):
        user_id = request.data.get('user_id', None)
        if user_id:
            if Freelancer.objects.filter(user_id=user_id).exists():
                return Response({'detail': '사용자 ID가 이미 존재합니다'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'detail': '사용자 ID를 사용할 수 있습니다'}, status=status.HTTP_200_OK)
        else:
            return Response({'detail': '사용자 ID가 제공되지 않았습니다'}, status=status.HTTP_400_BAD_REQUEST)
