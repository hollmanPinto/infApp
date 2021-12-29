from rest_framework import serializers
from projectsApp.models.clientes import Clientes
#from projectsApp.models.proyectos import Proyectos
#from projectsApp.serializers.proyectosSerializer import ProyectosSerializer

class ClientesSeriaizer(serializers.ModelSerializer):
	class Meta:
		model=Clientes
		fields='__all__'
