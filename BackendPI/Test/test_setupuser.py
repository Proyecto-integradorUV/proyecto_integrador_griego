from rest_framework.test import APITestCase
from rest_framework import status
from faker import Faker
from users.models import CustomUser

class TestSetUp(APITestCase):
    

    def setUp(self):
        self.login_url = 'http://localhost:8000/users/login/'

        faker = Faker()

        self.user = CustomUser.objects.create_superuser(
            username = 'TestCase',
            email = 'TestCase@gmail.com',
            first_name = 'TestCase',
            last_name = 'TestCase',
            password = 'TestPassword'
        )

        response = self.client.post(
            self.login_url,
            {
                'username': self.user.username,
                'password': 'TestPassword'
            },
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.token = response.data['token']
        self.client.credentials(HTTP_AUTHORIZATION = 'Token ' + self.token)
        #import pdb; pdb.set_trace()

        return super().setUp()

    def test_pass(self):
        print(self.token)

