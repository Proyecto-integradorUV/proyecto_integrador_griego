from django.contrib import admin

# Register your models here.
from .models import *


admin.site.register(Module)
admin.site.register(Question)
admin.site.register(Option)
admin.site.register(Test)