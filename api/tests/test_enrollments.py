from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from api.models import Client, Program, Enrollment

class TestEnrollmentAPI(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.client1 = Client.objects.create(name="Bob", age=40, gender="Male", contact="bob@example.com")
        self.program1 = Program.objects.create(name="Fitness", description="Stay healthy")

    def test_enroll_client(self):
        data = {
            "client": self.client1.id,
            "program": self.program1.id
        }
        res = self.client.post('/api/enrollments/', data, format='json')
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Enrollment.objects.count(), 1)

    def test_duplicate_enrollment(self):
        Enrollment.objects.create(client=self.client1, program=self.program1)
        data = {"client": self.client1.id, "program": self.program1.id}
        res = self.client.post('/api/enrollments/', data, format='json')
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)  # Because of unique_together
        self.assertEqual(Enrollment.objects.count(), 1)