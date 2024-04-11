from django.contrib import admin
from .models import BusinessTerm

# Register your models here.

@admin.register(BusinessTerm)
class BusinessTermAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'term_id', 'agreed_at')