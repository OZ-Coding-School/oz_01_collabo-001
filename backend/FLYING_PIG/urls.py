from django.contrib import admin
from django.urls import path
from drf_spectacular.views import SpectacularJSONAPIView, SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("docs/json/", SpectacularJSONAPIView.as_view(), name="schema-json"),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('schema/user/', SpectacularAPIView.as_view(), name='user_schema'),
    path('schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]