from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import FreelancerUser

class FreelancerUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelancerUser
        fields = ['id', 'first_name', 'last_name', 'user_id', 'password', 'country', 'mobile', 'email', 'language', 'is_active']

class FreelancerUserSignUpSerializer(serializers.ModelSerializer):
    user_id = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=FreelancerUser.objects.all())]
    )
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=FreelancerUser.objects.all())]
    )
    mobile = serializers.IntegerField(
        required=True,
        validators=[UniqueValidator(queryset=FreelancerUser.objects.all())]
    )
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password]
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True
    )

    class Meta:
        model = FreelancerUser
        fields = ('first_name', 'last_name', 'user_id', 'email', 'password', 'password2', 'country', 'mobile', 'language')

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )
        return data

    def create(self, validated_data):
        user = FreelancerUser.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            user_id=validated_data['user_id'],
            email=validated_data['email'],
            country=validated_data['country'],
            mobile=validated_data['mobile'],
            language=validated_data['language'],
            is_active=True
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class UserDeleteSerializer(serializers.Serializer):
    confirm_delete = serializers.BooleanField(required=True)

    def user_delete(self, instance):
        instance.delete()
    
class ChangePasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField(required=True)

