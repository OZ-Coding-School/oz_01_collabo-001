from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from .models import BusinessUser
from rest_framework.validators import UniqueValidator

class BusinessUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessUser
        fields = ['id', 'first_name', 'last_name', 'company', 'user_id', 'password', 'country', 'mobile', 'email', 'language', 'is_active']

class BusinessUserSignUpSerializer(serializers.ModelSerializer):
    user_id = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=BusinessUser.objects.all())]
    )
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=BusinessUser.objects.all())]
    )
    mobile = serializers.IntegerField(
        required=True,
        validators=[UniqueValidator(queryset=BusinessUser.objects.all())]
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
        model = BusinessUser
        fields = ('first_name', 'last_name', 'company', 'user_id', 'email', 'password', 'password2', 'country', 'mobile', 'language')

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )
        return data

    def create(self, validated_data):
        user = BusinessUser.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            company=validated_data['company'],
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

class BusinessUserloginSerializer(serializers.Serializer):
    user_id = serializers.CharField(required=True)
    password = serializers.CharField(
        write_only=True,
        required=True
    )