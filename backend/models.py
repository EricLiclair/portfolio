from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(max_length=100, blank=True)
    name = models.CharField(max_length=200)


def user_directory_path(instance, filename):
    return f"blogs/{filename}"


class Blog(models.Model):
    title = models.CharField(max_length=100, blank=False)
    description = models.CharField(max_length=200, blank=False)
    url = models.CharField(max_length=1000, blank=False)
    image = models.ImageField(upload_to=user_directory_path, blank=False)