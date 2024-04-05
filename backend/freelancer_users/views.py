from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import FreelancerUserSerializer
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