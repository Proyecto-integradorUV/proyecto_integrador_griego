from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields= ['id',
                  'first_name', 
                  'last_name',
                  'email',
                  'nickname',
                  'password',  
                ]
        
        
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields= ['id',
                  'first_name', 
                  'last_name',
                  'email',
                  'nickname',
                  'password',  
                ]

    def create(self, validated_data):
        password = validated_data.pop('password')
        person = User(**validated_data)
        person.set_password(password)

        person.save()
        
        return person