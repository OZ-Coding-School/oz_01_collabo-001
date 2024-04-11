from django.db import models
from freelancer_users.models import FreelancerUser

# Create your models here.


class FreelancerEmailVerifications(models.Model):
    id = models.AutoField(primary_key=True)
    user_index = models.ForeignKey(FreelancerUser, on_delete=models.CASCADE)
    email = models.EmailField()
    is_verified = models.BooleanField(default=False)