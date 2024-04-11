from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.backends import ModelBackend
from common.models import Common
from countries.models import Country

class FreelancerUser(AbstractBaseUser, Common):
    id = models.AutoField(primary_key=True)

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    user_id = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=255)
    country = models.ForeignKey(Country, on_delete=models.DO_NOTHING)
    mobile = models.IntegerField()
    email = models.EmailField(max_length=255, unique=True)
    language = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'user_id'

    def __str__(self):
        return self.user_id 


class FreelancerUserAuth(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = FreelancerUser.objects.get(user_id=username)
            if user.check_password(password):
                return user
        except FreelancerUser.DoesNotExist:
            return None
