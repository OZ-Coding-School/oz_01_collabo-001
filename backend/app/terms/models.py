from django.db import models
from common.models import Common

# Create your models here.

class Term(Common):
    name = models.CharField(max_length=100)
    content = models.TextField()
    is_required = models.BooleanField(default=True)