from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import UserSerializer, CreateUserSerializer
from .models import CustomUser
from rest_framework.views import APIView
from django.contrib.auth.hashers import check_password
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


from django_filters.rest_framework import DjangoFilterBackend



class CreateUserView(generics.CreateAPIView):
    serializer_class = CreateUserSerializer
    permission_classes = [permissions.AllowAny]


class UserList(generics.ListAPIView):
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['username']
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    

class UserUpdateAPIView(generics.UpdateAPIView):
    serializer_class = CreateUserSerializer
    queryset = CustomUser.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    lookup_field = "pk"
    

class LoginView(APIView):
    def post(self, request):
        user = CustomUser.objects.get(username= request.data.get('username'))
        password = request.data.get('password')
        if user:
            if check_password(password, user.password):
               token, created = Token.objects.get_or_create(user=user)
               return Response({'token': token.key, 'username': user.username, 'first_name': user.first_name, 'avatar': user.avatar, 'id': user.id}, status=status.HTTP_200_OK) 
            else:
               return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    def post(self, request):
        token = request.data.get('token')
        token = Token.objects.filter(key=token).first()

        if token:
            user = CustomUser.objects.get(id=token.user.id)
            Token.objects.filter(user=user).delete()
            return Response({'detail': 'Logout successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'User not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)


