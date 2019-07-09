from django.contrib import admin
from .models import User,Circulation
# Register your models here.
class CirculationAdmin(admin.ModelAdmin):
    list_display =('title','author','barcode','issue_date','status')

class UserAdmin(admin.ModelAdmin):
    list_display = ('name','email','roll_no','circulation_history')

admin.site.register(User,UserAdmin)
admin.site.register(Circulation,CirculationAdmin)
