from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import FreelancerUser

@admin.register(FreelancerUser)
class FreelancerUserAdmin(UserAdmin):
    fieldsets = (
        ("유저 정보", {"fields": ("user_id", "email", "password",)}),
        ("Personal info", {"fields": ("first_name", "last_name", "country", "mobile", "language",)}),
        ("Permissions", {"fields": ("is_active",)}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('user_id', 'email', 'first_name', 'last_name', 'country', 'mobile', 'language', 'password1', 'password2', 'is_active',),
        }),
    )

    list_display = ('user_id', 'email', 'first_name', 'last_name', 'is_active',)
    search_fields = ('email', 'first_name', 'last_name', )
    ordering = ('last_name',)

    filter_horizontal = ()
    list_filter = ()
