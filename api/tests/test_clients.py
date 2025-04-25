from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from api.models import Client

class ClientTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.test_data = {
            "name": "Test Client",
            "age": 30,
            "gender": "Female",
            "contact": "test@example.com"
        }

    def test_create_client(self):
        response = self.client.post('/api/clients/', self.test_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Client.objects.count(), 1)
        self.assertEqual(Client.objects.first().name, "Test Client")
