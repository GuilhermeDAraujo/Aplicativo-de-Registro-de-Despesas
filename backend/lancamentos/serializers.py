from rest_framework import serializers
from . models import Lancamento

class LancamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lancamento
        fields = ('id', 'nome', 'valor', 'banco', 'historico')