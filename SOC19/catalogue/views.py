from django.shortcuts import render
from .models import Catalogue

# Create your views here.
def catalogue(request):
    catalogue = Catalogue.objects.all()
    return render(request,'catalogue/catalogue_home.html',{'catalogue':catalogue})
