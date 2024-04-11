from django.db import models
from business_users.models import BusinessUser

# Create your models here.


class BusinessEmailVerifications(models.Model):
    id = models.AutoField(primary_key=True)
    user_index = models.ForeignKey(BusinessUser, on_delete=models.CASCADE)
    email = models.EmailField()
    is_verified = models.BooleanField(default=False)