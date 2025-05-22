from django.db import models

class Lancamento(models.Model):
    nome = models.CharField(max_length=100)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    banco = models.CharField(max_length=100)
    historico = models.TextField(blank=False, null=False)
    
    def __str__(self):
        return self.nome