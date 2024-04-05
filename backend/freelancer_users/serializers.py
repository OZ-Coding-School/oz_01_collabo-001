from rest_framework import serializers
from .models import FreelancerUser

class FreelancerUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelancerUser
        fields = ['id', 'first_name', 'last_name', 'user_id', 'password', 'country', 'mobile', 'email', 'language', 'is_active']
