from django.contrib import admin
from .models import Term

# Register your models here.
@admin.register(Term)
class TermAdmin(admin.ModelAdmin):
    list_display = ('name', 'content', 'is_required',)