from rest_framework import serializers
from .models import Freelancer

class FreelancerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Freelancer
        fields = ['first_name', 'last_name', 'email', 'user_id', 'password', 'id', 'country', 'lan', 'mobile']
