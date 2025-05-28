from django.urls import path
from . import views

urlpatterns = [
    path('lancamentos/', views.lancamento_view, name='lancamento'),
    path('lancamentos/<int:pk>', views.deletar_lancamento),
    path('filtrar/', views.filtrar_lancamento)
]
