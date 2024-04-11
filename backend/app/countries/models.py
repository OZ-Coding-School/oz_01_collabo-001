from django.db import models

# Create your models here.
class Country(models.Model):
    id = models.AutoField(primary_key=True)
    country_name = models.CharField(max_length=50)
    code = models.CharField(max_length=50)