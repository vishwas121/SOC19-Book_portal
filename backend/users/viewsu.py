from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CirculationHistorySerializer,UserSerializer
from .models import Circulation,User

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class CirculationView(viewsets.ModelViewSet):
    serializer_class = CirculationHistorySerializer
    queryset = Circulation.objects.all()