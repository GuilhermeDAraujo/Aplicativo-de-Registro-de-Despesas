from django.urls import path
from . import views

urlpatterns = [
    path('lancamentos/', views.lancamento_view, name='lancamento'),
]
