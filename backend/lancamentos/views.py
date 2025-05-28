from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Lancamento
from .serializers import LancamentoSerializer

@api_view(['GET', 'POST'])
def lancamento_view(request):
    if request.method == 'GET':
        lancamento = Lancamento.objects.all()
        serializer = LancamentoSerializer(lancamento, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = LancamentoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
def deletar_lancamento(request, pk):
    try:
        lancamento = Lancamento.objects.get(pk=pk)
        lancamento.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Lancamento.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)