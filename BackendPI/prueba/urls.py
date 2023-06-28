from django.urls import path
from .views import CreateModuleView, CreateTestView, UpdateTestView, ListTestView

urlpatterns = [
    path('module/create/', CreateModuleView.as_view(), name='create-module'),
    path('test/create/', CreateTestView, name='create-test'),
    path('test/update/', UpdateTestView.as_view(), name='update-test'),
    path('test/list/', ListTestView.as_view(), name='list-test'),
]