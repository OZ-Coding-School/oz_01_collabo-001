from rest_framework import serializers
from .models import FreelancerEmailVerifications

class FreelancerUserEmail(serializers.ModelSerializer):
    class Meta:
        model = FreelancerEmailVerifications
        fields = ('email',)

class FreelancerUserEmailVerification(serializers.ModelSerializer):
    class Meta:
        model = FreelancerEmailVerifications
        fields = ('email', 'user_index', 'is_verified', )

class FreelancerUserTokenVerification(serializers.Serializer):
    email = serializers.EmailField(required=True)
    token = serializers.IntegerField(required=True)