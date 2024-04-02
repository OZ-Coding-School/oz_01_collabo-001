from django.db import models
from freelancer_users.models import FreelancerUser
from terms.models import Term

# Create your models here.

class FreelancerTerm(models.Model):
    user_id = models.ForeignKey(FreelancerUser, on_delete=models.CASCADE)
    term_id = models.ForeignKey(Term, on_delete=models.CASCADE)
    agreed_at = models.DateTimeField(auto_now_add=True)