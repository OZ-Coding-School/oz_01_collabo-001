from django.urls import path
from .views import CreateCountry, SelectCountryENName, SelectCountryENNumber, SelectCountryKRName, SelectCountryKRNumber

urlpatterns = [
    path('create/', CreateCountry.as_view(), name='create_country'),
    path('select/en/name/', SelectCountryENName.as_view(), name='select_en-name'),
    path('select/en/number/', SelectCountryENNumber.as_view(), name='select_en-number'),
    path('select/kr/name/', SelectCountryKRName.as_view(), name='select_kr-name'),
    path('select/kr/number/', SelectCountryKRNumber.as_view(), name='select_kr-number'),
]