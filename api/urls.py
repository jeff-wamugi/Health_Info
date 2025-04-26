from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClientViewSet, ProgramViewSet, EnrollmentViewSet, ClientProfileView, create_superuser, run_migrations

router = DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'programs', ProgramViewSet)
router.register(r'enrollments', EnrollmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('run-migrations/', run_migrations),
    path('create-superuser/', create_superuser),
    path('clients/<int:pk>/profile/', ClientProfileView.as_view(), name='client-profile'),
]
