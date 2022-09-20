
from django.db import models

# Create your models here.
class contacts(models.Model):
    id = models.IntegerField(primary_key=True,default=0)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    message = models.CharField(max_length=255)
    
    class Meta:
        db_table = "contact"
        
class quotations(models.Model):
    service = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    budget = models.CharField(max_length=255)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    telephone = models.CharField(max_length=255)
    
    class Meta:
        db_table = "quotation"
    
    
    
    
    