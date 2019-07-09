from rest_framework import serializers
from .models import User,Circulation



class CirculationHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Circulation
        fields= ('id','username','title','author','barcode','status','issue_date')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','name','email','roll_no','password')
