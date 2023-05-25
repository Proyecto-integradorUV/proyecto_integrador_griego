from django.db import models
from django.core import validators

# Create your models here.

class User(models.Model):
    nickname = models.CharField('nickname', max_length=100, unique=True, blank=False, null=False)
    email = models.EmailField(max_length=100, unique=True, blank=False, null=False)
    password = models.CharField(max_length=200, validators=[validators.MinLengthValidator(8)])

