from django.contrib import admin
from .models import Country

# Register your models here.

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('id', 'country_name', 'code',)