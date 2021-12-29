from django.db import models
#from .proyectos import Proyectos

class Clientes(models.Model):
	username = models.CharField(max_length=100, unique=True)
	#proyectos=models.IntegerField()
	#proyectos = models.ForeignKey(Proyectos, related_name='proyectos', on_delete=models.CASCADE, default=1, to_field='idProyects', db_column='idProyects')
