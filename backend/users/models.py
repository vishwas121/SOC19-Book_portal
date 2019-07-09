
from django.db import models

# Create your models here.


class Circulation(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    barcode = models.CharField(max_length=20)
    issue_date = models.DateField(auto_now_add=True,null=True)
    status = models.BooleanField()

class User(models.Model):
    name = models.CharField(max_length=40,db_index=True,unique=True)
    email = models.EmailField(max_length=100,db_index=True,unique=True)
    roll_no=models.IntegerField(db_index=True,unique=True)
    password = models.CharField(max_length=40)
    circulation_history = models.ForeignKey(Circulation,on_delete = models.CASCADE,null=True)
