from django.conf.urls import url
from django.conf.urls import include
from django.contrib import admin
from . import views,settings
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    url(r'^admin/', admin.site.urls),
   url(r'^accounts/',include('accounts.urls')),
    url(r'^about/$', views.about),
    url(r'^$', views.homepage),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
