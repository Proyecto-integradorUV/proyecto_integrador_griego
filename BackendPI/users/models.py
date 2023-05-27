import binascii
import os
from django.db import models
from django.core import validators
from django.contrib.auth.hashers import make_password, check_password
from django.utils.translation import gettext_lazy as _
from django.conf import settings

# Create your models here.

class User(models.Model):
    first_name = models.CharField(max_length=30, blank=False, null=False, default="")
    last_name = models.CharField(max_length=30, blank=False, null=False,default="")
    email = models.EmailField(max_length=100, unique=True, blank=False, null=False)
    nickname = models.CharField('nickname', max_length=100, unique=True, blank=False, null=False)
    password = models.CharField(max_length=200, validators=[validators.MinLengthValidator(8)])

    def set_password(self, password):
        self.password = make_password(password)
    
    def validate(self, password):
        return check_password(password, self.password)
    
class Token(models.Model):
    """
    The default authorization token model.
    """
    key = models.CharField(_("Key"), max_length=40, primary_key=True)
    user = models.OneToOneField(
        User, related_name='auth_token',
        on_delete=models.CASCADE, verbose_name=_("User")
    )
    created = models.DateTimeField(_("Created"), auto_now_add=True)

    class Meta:
        # Work around for a bug in Django:
        # https://code.djangoproject.com/ticket/19422
        #
        # Also see corresponding ticket:
        # https://github.com/encode/django-rest-framework/issues/705
        abstract = 'rest_framework.authtoken' not in settings.INSTALLED_APPS
        verbose_name = _("Token")
        verbose_name_plural = _("Tokens")

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = self.generate_key()
        return super().save(*args, **kwargs)

    @classmethod
    def generate_key(cls):
        return binascii.hexlify(os.urandom(20)).decode()

    def __str__(self):
        return self.key




