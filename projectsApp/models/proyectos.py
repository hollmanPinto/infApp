from django.db import models
from django.db import models
from .clientes import Clientes

class Proyectos(models.Model):
	projectName = models.CharField(max_length=100, unique=True, null=False)
	descripcion = models.CharField(max_length=200, null=False)
	fechaIngreso = models.DateTimeField(null=True, blank=True)
	fechaSalida = models.DateTimeField(null=True, blank=True)
	responsable = models.CharField(max_length=200, null=False)
	clientesId = models.ForeignKey(Clientes, related_name='clientesId', on_delete=models.CASCADE)
