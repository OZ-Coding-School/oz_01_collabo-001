from rest_framework import serializers
from .models import Country

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'en_name', 'kr_name', 'code', 'number')

class SelectCountryENNameSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    en_name = serializers.CharField(max_length=50)
    code = serializers.CharField(max_length=3)

class SelectCountryKRNameSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    kr_name = serializers.CharField(max_length=50)
    code = serializers.CharField(max_length=3)

class SelectCountryENNumberSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    en_name = serializers.CharField(max_length=50)
    number = serializers.CharField(max_length=3)

class SelectCountryKRNumberSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    kr_name = serializers.CharField(max_length=50)
    number = serializers.CharField(max_length=3)