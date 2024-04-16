from django.contrib import admin
from .models import Country

# Register your models here.

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('id', 'en_name', 'kr_name','code', 'number', )
    fields = ('en_name', 'kr_name', 'code', 'number')