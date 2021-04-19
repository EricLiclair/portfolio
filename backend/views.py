from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from .serializers import ContactSerializer, CreateBlogSerializer, LoginSerializer, GetBlogSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.shortcuts import redirect

from .models import User, Blog


class ContactFormView(APIView):
    serializer_class = ContactSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if not serializer.is_valid():
            print("error")
            return redirect("/", status=status.HTTP_400_BAD_REQUEST)
        print(serializer.data)
        return redirect("/", status=status.HTTP_200_OK)
        # return Response({"Success": "Message recieved!"}, status=status.HTTP_200_OK)


class LoginView(APIView):
    serializer_class = LoginSerializer

    def put(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if request.user.is_authenticated:
            return Response({'Message': 'Action Denied'}, status=status.HTTP_403_FORBIDDEN)

        if not serializer.is_valid():
            print(serializer.errors)
            return Response({'Bad Request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)
        
        username = serializer.data.get('username')
        password = serializer.data.get('password')
        queryset = User.objects.filter(username=username)

        if not queryset.exists():
            return Response({'User Not Found': 'Invalid Username'}, status=status.HTTP_404_NOT_FOUND)

        user = authenticate(request, username=username, password=password)
        if user is None:
            return Response({'Unsuccessful': "Incorrect Password!"}, status=status.HTTP_400_BAD_REQUEST)
        login(request, user)
        print("logged in", user.username)
        return Response({'Success': "Logged In!"}, status=status.HTTP_200_OK)


class LogoutView(APIView):
    def post(self, request, format=None):
        logout(request)
        return Response({"Success": "Logged Out!"}, status=status.HTTP_200_OK)


class CreateBlogView(APIView):
    serializer_class = CreateBlogSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if not request.user.is_authenticated:
            return redirect("/login")

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        title = serializer.data.get('title')
        description = serializer.data.get('description')
        url = serializer.data.get('url')
        title = serializer.data.get('title')
        image = request.data['image']

        blog = Blog()
        blog.title = title
        blog.description = description
        blog.url = url
        blog.image = image
        blog.save()
        return Response(CreateBlogSerializer(blog).data, status=status.HTTP_200_OK)


class GetBlogsView(generics.ListAPIView):
    serializer_class = GetBlogSerializer
    queryset = Blog.objects.all()


