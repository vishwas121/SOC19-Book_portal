from django.contrib import admin
from django.urls import path , include
from rest_framework import routers
from catalogue import views

router = routers.DefaultRouter()

router.register(r'catalogue' ,views.BookView , 'book_list')

urlpatterns = [
    path('admin/',admin.site.urls),
    path('api/',include(router.urls))
]
