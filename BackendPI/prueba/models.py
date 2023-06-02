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


class Question(models.Model):
    test = models.ForeignKey(Module, on_delete=models.CASCADE, null=False)
    question_text = models.TextField(verbose_name='Texto de la pregunta.', null=False, blank=False)

    def __str__(self):
        return self.question_text



class Option(models.Model):
    question = models.ForeignKey(Question, related_name='Preguntas', on_delete=models.CASCADE, null=False)
    is_correct = models.BooleanField(verbose_name='¿Es esta la respuesta?', default=False, null=False, blank=False)
    answer = models.TextField(verbose_name='Texto de la respuesta.', null=False, blank=False)

    def __str__(self):
        return self.answer
  


class Test(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=False)
    test = models.ForeignKey(Module, on_delete=models.CASCADE, null=False)
    score = models.DecimalField(null = False, blank = False, max_digits=2, decimal_places=1)
    date = models.DateField(null=False, blank=False, default = datetime.date.today)

    def __str__(self):
        return self.score

