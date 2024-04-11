from django.contrib import admin
from .models import FreelancerTerm

# Register your models here.
@admin.register(FreelancerTerm)
class FrelancerTermAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'term_id', 'agreed_at')