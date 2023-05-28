from rest_framework import serializers
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields= ['id',
                  'first_name', 
                  'last_name',
                  'email',
                  'username',
                  'password',  
                ]
        extra_kwargs = {
            'id': {'read_only': True},
            'password': {'write_only': True},
             }
        
        
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model= CustomUser
        fields= ['id',
                  'first_name', 
                  'last_name',
                  'email',
                  'username',
                  'password',  
                ]

    def create(self, validated_data):
        password = validated_data.pop('password')
        person = CustomUser(**validated_data)
        person.set_password(password)

        person.save()
        
        return person