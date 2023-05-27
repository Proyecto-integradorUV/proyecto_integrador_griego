from rest_framework import generics, permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.views.generic.edit import FormView
from django.contrib.auth import login, logout, authenticate, get_user_model
from django.http import HttpResponseRedirect

from django.contrib.auth.forms import AuthenticationForm

from .models import User, Token
from .serializers import CreateUserSerializer, UserSerializer

class CreateUserView(generics.CreateAPIView):
    serializer_class = CreateUserSerializer
    permission_classes = [permissions.AllowAny]

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.AllowAny]


class LoginView(APIView):
    def post(self, request):
        user = User.objects.get(nickname= request.data.get('nickname'))
        password = request.data.get('password')
        if user:
            if user.validate(password):
               token = Token()
               token.user = user
               token.save()
               return Response({'token': token.key})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    def post(self, request):
        user = request.user
        if user.is_authenticated:
            Token.objects.filter(user=user).delete()
            return Response({'detail': 'Logout successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'User not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)
