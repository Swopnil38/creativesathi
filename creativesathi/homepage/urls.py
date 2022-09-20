from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.homepage),
    path('about-us/',views.team),
    path('work/',views.work),
    path('contact/',views.form),
    path('quotation/',views.quotation),
    path('webapp/',views.web),
    path('mobileapp/',views.mobile),
    path('contentcreation/',views.content),
    path('digitalmarketing/',views.marketing),
]