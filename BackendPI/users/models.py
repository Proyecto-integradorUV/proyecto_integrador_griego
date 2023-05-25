from django.db import models
from django.core import validators
from django.contrib.auth.hashers import make_password

# Create your models here.

class User(models.Model):
    first_name = models.CharField(max_length=30, blank=False, null=False, default="")
    last_name = models.CharField(max_length=30, blank=False, null=False,default="")
    email = models.EmailField(max_length=100, unique=True, blank=False, null=False)
    nickname = models.CharField('nickname', max_length=100, unique=True, blank=False, null=False)
    password = models.CharField(max_length=200, validators=[validators.MinLengthValidator(8)])

    def set_password(self, password):
        self.password = make_password(password)



