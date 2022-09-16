from django.urls import path, include

from home.views.index import index

urlpatterns = [
    path("", index, name="index")
]