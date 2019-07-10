from django.urls import include, path
from user import views
urlpatterns = [
    path('user/',include('user.urls')),
    path('logout',views.Logout.as_view()),
    path('rest_auth/',include('rest_auth.urls')),
    path('rest_auth/registration/',include('rest_auth.registration.urls')),
]
