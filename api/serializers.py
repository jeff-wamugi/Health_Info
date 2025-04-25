from .models import Program, Client, Enrollment
from rest_framework import serializers

class ProgramSerializer(serializers.ModelSerializer):
    enrollment_count = serializers.SerializerMethodField()

    class Meta:
        model = Program
        fields = ['id', 'name', 'description', 'enrollment_count']

    def get_enrollment_count(self, obj):
        return obj.enrollments.count()

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'

class ClientProfileSerializer(serializers.ModelSerializer):
    programs = serializers.SerializerMethodField()

    class Meta:
        model = Client
        fields = ['id', 'name', 'age', 'gender', 'contact', 'programs']

    def get_programs(self, obj):
        return [{
            'enrollment_id': e.id,
            'program_id': e.program.id,
            'program_name': e.program.name
        } for e in obj.enrollments.all()]