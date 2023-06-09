from django.urls import path
from .views import UserList, LoginView, LogoutView, CreateUserView


urlpatterns = [
    path('signup/', CreateUserView.as_view(), name='signup'),
    path('list/', UserList.as_view(), name='user-list'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
