from django.urls import path, include

from home.views.index_view import index,testback

urlpatterns = [
    path("", index, name="index"),
    path("testback/",testback, name="testback"),
]