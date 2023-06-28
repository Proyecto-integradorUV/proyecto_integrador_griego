from django.shortcuts import render
from rest_framework.views import APIView
from .models import Module, Test
from users.models import CustomUser
from rest_framework import generics, permissions
from .serializers import ModuleSerializer, TestSerializer
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status

from datetime import datetime
import datetime
from django.utils import timezone

from decimal import Decimal

from rest_framework.decorators import api_view

from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.

class CreateModuleView(generics.CreateAPIView):
    serializer_class = ModuleSerializer
    permission_classes = [permissions.AllowAny]



@api_view(['POST'])
def CreateTestView(request):
    if request.method == 'POST':
        try:
            username = request.POST.get('username')
            module_topic = request.POST.get('module')
            score = Decimal(request.POST.get('score'))
            approved = (str(request.POST.get('approved')) == 'True')

            user = CustomUser.objects.get(username=username)
            module = Module.objects.get(topic=module_topic)

            try:
                test = Test.objects.get(user=user, module=module)
                return JsonResponse({'message': 'El test ya existe'})

            except Test.DoesNotExist:
                test = Test(user=user, module=module, score=score, approved=approved)
                test.save()

                return JsonResponse({'message': 'Test creado exitosamente'})

        except Exception as e:
            return Response({'message': 'Error al guardar el Test', 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class UpdateTestView(APIView):
    def put(self, request, format=None):
        try:
            username = request.data.get('username')
            module_topic = request.data.get('module')
            score = Decimal(request.data.get('score'))
            approved = (str(request.POST.get('approved')) == 'True')
            date = datetime.date.today()  # Obtiene la fecha actual
            formatted_date = date.strftime('%Y-%m-%d')  # Formatea la fecha en formato 'YYYY-MM-DD'

            user = CustomUser.objects.get(username=username)
            module = Module.objects.get(topic=module_topic)

            test = Test.objects.get(user=user, module=module)

            if test.score < score:
                test.user = user
                test.module = module
                test.score = score
                test.approved = approved
                test.date = formatted_date

                test.save()
                return Response({'message': 'Test actualizado exitosamente'}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Test con menor puntaje'}, status=status.HTTP_200_OK)
            

        except Test.DoesNotExist:
            return Response({'message': 'El test no existe'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'message': 'Error al actualizar el test', 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class ListTestView(generics.ListAPIView):
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user_id', 'module_id']
    serializer_class = TestSerializer
    queryset = Test.objects.all()
