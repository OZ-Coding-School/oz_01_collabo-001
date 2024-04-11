from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import BusinessUser

@admin.register(BusinessUser)
class BusinessUserAdmin(UserAdmin):
    fieldsets = (
        ("유저 정보", {"fields": ("user_id", "email", "password",)}),
        ("Personal info", {"fields": ("first_name", "last_name", "country", "mobile", "language",)}),
        ("Permissions", {"fields": ("is_active",)}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('user_id', 'email', 'first_name', 'last_name', 'company', 'country', 'mobile', 'language', 'password1', 'password2', 'is_active',),
        }),
    )

    list_display = ('user_id', 'email', 'first_name', 'last_name', 'company', 'is_active',)
    search_fields = ('email', 'first_name', 'last_name', 'company', )
    ordering = ('company',)

    filter_horizontal = ()
    list_filter = ()
