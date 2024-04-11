from rest_framework import serializers
from .models import BusinessEmailVerifications

class BusinessUserEmail(serializers.ModelSerializer):
    class Meta:
        model = BusinessEmailVerifications
        fields = ('email',)

class BusinessUserEmailVerification(serializers.ModelSerializer):
    class Meta:
        model = BusinessEmailVerifications
        fields = ('email', 'user_index', 'is_verified', )

class BusinessUserTokenVerification(serializers.Serializer):
    email = serializers.EmailField(required=True)
    token = serializers.IntegerField(required=True)