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
                  'avatar',  
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
                  'avatar',  
                ]

    def create(self, validated_data):
        password = validated_data.pop('password')
        person = CustomUser(**validated_data)
        person.set_password(password)

        person.save()
        
        return person

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.username = validated_data.get('username', instance.username)
        instance.password = validated_data.get('password', instance.password)
        instance.avatar = validated_data.get('avatar', instance.avatar)
    
        instance.save()
        
        return instance