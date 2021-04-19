from rest_framework import serializers
from .models import Blog, User

class ContactSerializer(serializers.Serializer):
    Email = serializers.EmailField()
    Name = serializers.CharField(max_length=200)
    Message = serializers.CharField(max_length=500)


class CreateBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"


class GetBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"



class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=200)
    class Meta:
        model = User
        fields = ["username",  "password"]