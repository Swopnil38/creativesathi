from django.http import HttpResponse
from django.template import loader

from django.shortcuts import render
from homepage.models import contacts,quotations
from django.contrib import messages


def form(request):
    if request.method=='POST':
        if request.POST.get('name') and request.POST.get('email') and request.POST.get('message'):
            savedetails = contacts()
            savedetails.name=request.POST.get('name')
            savedetails.email=request.POST.get('email')
            savedetails.message=request.POST.get('message')
            savedetails.save()
            messages.success(request,'Details Has been Successfully Added')
            return render(request,'contact.html')
        
    else:
        return render(request,'contact.html')

def quotation(request):
    if request.method=='POST':
        if request.POST.get('service') and request.POST.get('additional_message') and request.POST.get('budget') and request.POST.get('firstname') and request.POST.get('lastname') and request.POST.get('email') and request.POST.get('telephone'):
            savedetails = quotations()
            savedetails.service=request.POST.get('service')
            savedetails.description=request.POST.get('additional_message')
            savedetails.budget=request.POST.get('budget')
            savedetails.firstname=request.POST.get('firstname')
            savedetails.lastname=request.POST.get('lastname')
            savedetails.email=request.POST.get('email')
            savedetails.telephone=request.POST.get('telephone')
            savedetails.save()
            messages.success(request,'Details Has been Successfully Added')
            return render(request,'index.html')
        
    else:
        return render(request,'quotation.html')


def homepage(request):
    return render(request,'index.html')

def team(request):
    return render(request,'about.html')


def work(request):
    return render(request,'blog.html')

def content(request):
    return render(request,'contentcreation.html')


def marketing(request):
    return render(request,'360marketing.html')


def mobile(request):
    return render(request,'mobile.html')


def web(request):
    return render(request,'webapp.html')
