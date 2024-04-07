from django.urls import path
from .views import UserDetail, SignUp

urlpatterns = [
    path('freelancer_user/<int:pk>/', UserDetail.as_view(), name='freelancer_user_detail'),
    path('signup/', SignUp.as_view(), name='signup'),
]