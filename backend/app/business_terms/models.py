from django.db import models
from business_users.models import BusinessUser
from terms.models import Term

# Create your models here.

class BusinessTerm(models.Model):
    user_id = models.ForeignKey(BusinessUser, on_delete=models.CASCADE)
    term_id = models.ForeignKey(Term, on_delete=models.CASCADE)
    agreed_at = models.DateTimeField(auto_now_add=True)