from django.urls import path
from .views import UserList, LoginView, LogoutView


urlpatterns = [
    path('list/', UserList.as_view(), name = 'user-list'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]