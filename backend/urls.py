from django.urls import path
from .views import ContactFormView, CreateBlogView, GetBlogsView, LogoutView, LoginView
urlpatterns = [
    path('contact-form', ContactFormView.as_view()),
    path('logout', LogoutView.as_view()),
    path('login', LoginView.as_view()),
    path('blogs', GetBlogsView.as_view()),
    path('create-blog', CreateBlogView.as_view()),
]