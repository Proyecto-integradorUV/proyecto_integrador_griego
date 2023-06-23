from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager


class CustomUser(AbstractUser):

    AVATAR_CHOICES = (('Afrodita', 'Afrodita'), ('Apolo', 'Apolo'), ('Ares', 'Ares'), ('Artemisa', 'Artemisa'),
                     ('Atenea', 'Atenea'), ('Demeter', 'Demeter'), ('Dionisio', 'Dionisio'), ('Hades', 'Hades'), 
                     ('Hefesto', 'Hefesto'), ('Hera', 'Hera'), ('Hestia', 'Hestia'), ('Medusa', 'Medusa'),
                     ('Poseidon', 'Poseidon'), ('Zeus', 'Zeus'), ('default_photo', 'default_photo'))

    first_name = models.CharField(max_length=30, blank=False, null=False)
    last_name = models.CharField(max_length=30, blank=False, null=False)
    email = models.EmailField(_('email address'), unique=True, null=False)
    username = models.CharField(blank=False, max_length=100, unique=True, null=False)
    avatar = models.CharField(choices=AVATAR_CHOICES, null=False, blank=False, max_length = 20, default='default_photo')

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name', 'avatar']

    objects = CustomUserManager()

    def __str__(self):
        return self.email
