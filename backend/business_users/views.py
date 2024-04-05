from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from .models import BusinessUser
from .serializers import BusinessUserSerializer

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
