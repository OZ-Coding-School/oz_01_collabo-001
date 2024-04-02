from django.db import models
from django.contrib.auth.models import AbstractBaseUser
# from freelancer_users.models import FreelancerUser
from common.models import Common
from countries.models import Country


# class BusinessUser(FreelancerUser):
#     company = models.CharField(max_length=50)


class BusinessUser(AbstractBaseUser, Common):
    id = models.AutoField(primary_key=True)

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
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