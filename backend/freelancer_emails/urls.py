from django.urls import path
from .views import SendEmail, VerifyEmail

urlpatterns = [
    path('send/', SendEmail.as_view(), name='SendEmail'),
    path('verification/', VerifyEmail.as_view(), name='VerifiedEmail')
]