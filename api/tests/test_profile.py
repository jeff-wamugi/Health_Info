from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from api.models import Client, Program, Enrollment

class TestClientProfileAPI(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.client1 = Client.objects.create(name="David", age=50, gender="Male", contact="david@example.com")
        self.program1 = Program.objects.create(name="Vaccination", description="COVID-19 vaccines")
        Enrollment.objects.create(client=self.client1, program=self.program1)

    def test_view_client_profile(self):
        res = self.client.get(f'/api/clients/{self.client1.id}/profile/')
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data['name'], "David")
        self.assertEqual(res.data['programs'][0]['program_name'], "Vaccination")