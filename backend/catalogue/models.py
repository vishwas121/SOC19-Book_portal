from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    barcode = models.CharField(max_length=20)
    status = models.BooleanField()

    def _str_(self):
        return self.title