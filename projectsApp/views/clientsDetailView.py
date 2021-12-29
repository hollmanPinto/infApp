from django.conf import settings
from rest_framework import generics, status
from rest_framework.response import Response

from projectsApp.models.clientes import Clientes
from projectsApp.models.proyectos import Proyectos
from projectsApp.serializers.proyectosSerializer import ProyectosSerializer
from projectsApp.serializers.clientesSerializer import ClientesSeriaizer

class ClientsDetailView(generics.ListCreateAPIView):
	queryset=Clientes.objects.all()
	serializer_class = ClientesSeriaizer

	'''def get(self, request, *args, **kwargs):
		return super().get(request, *args, **kwargs)'''