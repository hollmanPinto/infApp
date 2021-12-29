from projectsApp.models.proyectos import Proyectos
from projectsApp.serializers import clientesSerializer
from projectsApp.serializers.clientesSerializer import ClientesSeriaizer
from rest_framework import serializers

class ProyectosSerializer(serializers.ModelSerializer):
	clientesId=ClientesSeriaizer()
	class Meta:
		model=Proyectos
		fields='__all__'