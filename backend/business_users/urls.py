from django.urls import path
from .views import UserDetail

urlpatterns = [
    path('business_user/<int:pk>/', UserDetail.as_view(), name='business_user_detail'),
]