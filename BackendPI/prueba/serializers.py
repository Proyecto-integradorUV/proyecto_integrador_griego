from rest_framework import serializers
from .models import Module, Test

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = '__all__'

    def create(self, validated_data):
        module = Module(**validated_data)
        module.save()

        return module

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'