from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularJSONAPIView, SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("docs/json/", SpectacularJSONAPIView.as_view(), name="schema-json"),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('schema/user/', SpectacularAPIView.as_view(), name='user_schema'),
    path('schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    path('api/v1/freelancer_user/', include('freelancer_users.urls')),
    path('api/v1/business_user/', include('business_users.urls')),
    path('api/v1/freelancer_user/email/', include('freelancer_emails.urls'), name = 'freelancer_email'),
    path('api/v1/business_users/email/', include('business_emails.urls'), name = 'business_email'),
]