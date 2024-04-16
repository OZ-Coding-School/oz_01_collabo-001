from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Country
from .serializers import CountrySerializer, SelectCountryENNameSerializer, SelectCountryKRNameSerializer, SelectCountryENNumberSerializer, SelectCountryKRNumberSerializer
# Create your views here.


class CreateCountry(APIView):
    serializer_class = CountrySerializer
    def post(self, requst):
        serializer = CountrySerializer(data=requst.data)
        if serializer.is_valid():
            serializer.save()
            return Response({ "message" : "Successfully created"}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SelectCountryENName(APIView):
    def get(self, requst):
        en_country = Country.objects.all().values()
        serializer = SelectCountryENNameSerializer(data=list(en_country), many=True)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SelectCountryKRName(APIView):
    def get(self, requst):
        kr_country = Country.objects.all().values()
        serializer = SelectCountryKRNameSerializer(data=list(kr_country), many=True)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SelectCountryENNumber(APIView):
    def get(self, requst):
        en_number = Country.objects.all().values()
        serializer = SelectCountryENNumberSerializer(data=list(en_number), many=True)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SelectCountryKRNumber(APIView):
    def get(self, requst):
        kr_number = Country.objects.all().values()
        serializer = SelectCountryKRNumberSerializer(data=list(kr_number), many=True)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)