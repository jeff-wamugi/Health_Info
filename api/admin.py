from django.contrib import admin
from .models import Program, Client, Enrollment

# Register your models here.
admin.site.register(Program)
admin.site.register(Client)
admin.site.register(Enrollment)
# Compare this snippet from api/views.py:
# from django.shortcuts import render
# from django.http import JsonResponse
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from .models import Program, Client, Enrollment
# from .serializers import ProgramSerializer, ClientSerializer, EnrollmentSerializer
  