from django.db import models
import datetime
from users.models import CustomUser
from decimal import Decimal 

# Create your models here.


class Module(models.Model):
    CHOICES_TOPIC = (('Deportes', 'Deportes'), ('Derechos', 'Derechos'), ('Arte', 'Arte'), ('Gastronomía', 'Gastronomía'),('Vestimenta', 'Vestimenta'), ('Lugares', 'Lugares'), ('Literatura', 'Literatura'), ('Filosofía', 'Filosofía'), ('Mitología', 'Mitología'))
    topic = models.CharField(choices=CHOICES_TOPIC, null=False, blank=False, max_length = 20, unique=True)   

    def __str__(self):
        return self.topic



class Test(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=False)
    module = models.ForeignKey(Module, on_delete=models.CASCADE, null=False)
    score = models.DecimalField(null = False, blank = False, max_digits=2, decimal_places=1)
    date = models.DateField(null=False, blank=False, default = datetime.date.today)
    approved = models.BooleanField(default = False, null = False, blank = False)

    def __str__(self):
        return self.approved

