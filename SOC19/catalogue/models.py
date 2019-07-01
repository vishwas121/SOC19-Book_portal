from django.db import models

# Create your models here.
class Catalogue(models.Model):
    book_name = models.TextField()
    book_barcode = models.CharField(max_length=20)
    book_author= models.TextField(max_length = 50)
    book_status = models.BooleanField()
    book_taker = models.TextField()
#    book_issue_date = models.DateTimeField()
