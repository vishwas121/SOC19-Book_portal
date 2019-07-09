from rest_framework import serializers
from .models import User,Circulation



class CirculationHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Circulation
        fields= ('id','title','author','barcode','status','issue_date')

class UserSerializer(serializers.ModelSerializer):
    circulation_history = CirculationHistorySerializer()
    class Meta:
        model = User
        fields = ('id','name','email','roll_no','circulation_history')
