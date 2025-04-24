from django.db import models

# Create your models here.
# This is a Django model for a health information system that includes classes for Program, Client, and Enrollment.
# Each class represents a table in the database with fields that define the data structure.
class Program(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Client(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    contact = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Enrollment(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='enrollments')
    program = models.ForeignKey(Program, on_delete=models.CASCADE, related_name='enrollments')
    enrolled_on = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ('client', 'program')