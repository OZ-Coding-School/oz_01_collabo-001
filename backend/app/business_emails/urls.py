from django.urls import path
from .views import SendEmail, VerifyEmail

urlpatterns = [
    path('sendemail/', SendEmail.as_view(), name='SendEmail'),
    path('verifyemail/', VerifyEmail.as_view(), name='VerifiedEmail')
]