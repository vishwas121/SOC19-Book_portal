from django.contrib import admin
from django.urls import path , include
from rest_framework import routers
from catalogue import viewsc
from users import viewsu
router = routers.DefaultRouter()

router.register(r'users',viewsu.UserView,'user_list')
router.register(r'catalogue' ,viewsc.BookView , 'book_list')
router.register(r'circulation',viewsu.CirculationView,'circulate')


urlpatterns = [
    path('admin/',admin.site.urls),
    path('api/',include(router.urls)),
    path('api/v1/',include('api.urls'))
]
