from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import CustomUser
from .serializers import UsersSerializer

# Create your views here.

class UserListView(generics.ListCreateAPIView):
    queryset =CustomUser.objects.all()
    serializer_class = UsersSerializer


class Logout(APIView):
    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)
