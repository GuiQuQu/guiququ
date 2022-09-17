import re
from django.shortcuts import render

from django.http import JsonResponse

def index(request):
    
    return render(request, "index.html")

def testback(request):
    data = request.GET
    message = data.get("message")
    print(message)
    ret_message = {"message":"Hello World from Django"}

    return JsonResponse(ret_message)
