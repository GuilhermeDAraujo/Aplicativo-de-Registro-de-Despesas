from rest_framework.decorators import api_view
from rest_framework.responde import Response
from rest_framework import status

from .models import Lancamento
from .serializers import LancamentoSerializer

@api_view(['GET'])
def lancamento_view(request):
    if request.method == 'GET':
        lancamento = Lancamento.objects.all()
        serializer = LancamentoSerializer(lancamento, many=True)
        return Response(serializer.data)