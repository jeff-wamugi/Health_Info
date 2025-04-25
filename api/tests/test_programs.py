from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from api.models import Program

class TestProgramAPI(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_create_program(self):
        data = {
            "name": "Nutrition",
            "description": "Nutrition awareness program"
        }
        res = self.client.post('/api/programs/', data, format='json')
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Program.objects.count(), 1)
        self.assertEqual(Program.objects.first().name, "Nutrition")
