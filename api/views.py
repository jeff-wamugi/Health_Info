from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, viewsets, generics, filters
from .models import Program, Client, Enrollment
from .serializers import ProgramSerializer, ClientSerializer, EnrollmentSerializer, ClientProfileSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.generics import RetrieveAPIView

# Create your views here.
# This is a Django view that handles HTTP requests for the health information system.
class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'contact']
    permission_classes = [IsAuthenticated] # Allow an authenticated user to access this view

class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    permission_classes = [IsAuthenticated] # Allow an authenticated user to access this view

class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    permission_classes = [IsAuthenticated] # Allow an authenticated user to access this view

class ClientProfileView(generics.RetrieveAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientProfileSerializer
    permission_classes = [IsAuthenticated] # Allow an authenticated user to access this view
