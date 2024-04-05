from rest_framework import serializers
from .models import BusinessUser

class BusinessUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessUser
        fields = ['id', 'first_name', 'last_name', 'company', 'user_id', 'password', 'country', 'mobile', 'email', 'language', 'is_active']
