from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    
    def create_user(self, nickname, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not nickname:
            raise ValueError(_('The nickname must be set'))
        user = self.model(nickname=nickname, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, nickname, password, **extra_fields):
        extra_fields.setdefault('is_active', True)
        return self.create_user(nickname, password, **extra_fields)