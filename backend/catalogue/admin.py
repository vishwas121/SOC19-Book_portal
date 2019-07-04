from django.contrib import admin
from .models import Book
# Register your models here.

class BooksAdmin(admin.ModelAdmin):
    list_display = ('title','author','barcode','status')



admin.site.register(Book,BooksAdmin)