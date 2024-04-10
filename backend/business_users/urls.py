from django.urls import path
from .views import UserDetail, SignUp
from .views import UserDetail, UserDelete, ChangePasswordView

urlpatterns = [
    path('<int:pk>/', UserDetail.as_view(), name='business_user_detail'),
    path('signup/', SignUp.as_view(), name='signup'),
    path('<int:pk>/', UserDetail.as_view(), name='business_user_detail'),
    path('<int:pk>/change_password/', ChangePasswordView.as_view(), name='business_user_change_password'),
    path('<int:pk>/delete/', UserDelete.as_view(), name='business_user_delete'),
]