# Generated by Django 4.2.1 on 2023-05-25 01:39

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(max_length=100, unique=True, verbose_name='nickname')),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=200, validators=[django.core.validators.MinLengthValidator(8)])),
            ],
        ),
    ]
