import React, { useEffect, useState, useRef } from 'react';
import './style.css'
import Trash from '../../assets/trash.png'

function Home() {
  const [lancamentos, setLancamentos] = useState([]);

  const inputNome = useRef()
  const inputValor = useRef()
  const inputBanco = useRef()
  const inputHistorico = useRef()

  useEffect(() => {
    buscarLancamentos();
  }, [])

  const buscarLancamentos = () => {
    fetch('http://localhost:8000/lancamento/lancamentos/')
      .then(response => response.json())
      .then(data => setLancamentos(data))
      .catch(err => console.error('Erro ao buscar lançamentos:', err));
  }

  const registrarLancamento = async () => {
    const novoLancamento = {
      nome: inputNome.current.value,
      valor: inputValor.current.value,
      banco: inputBanco.current.value,
      historico: inputHistorico.current.value
    };

    await fetch('http://localhost:8000/lancamento/lancamentos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoLancamento)
    });
    buscarLancamentos()
    inputNome.current.value = '';
    inputBanco.current.value = '';
    inputValor.current.value = '';
    inputHistorico.current.value = '';
  }

  const deletarLancamento = async (id) => {
    await fetch(`http://localhost:8000/lancamento/lancamentos/${id}`, {
      method: 'DELETE',
    });
    buscarLancamentos()
  }

  return (
    <div className='container'>
      <div className='from-wrapper'>
        <form>
          <h1>Registrar Despesa</h1>
          <input placeholder='Nome' name='nome' type='text' ref={inputNome} />
          <input placeholder='Valor' name='valor' type='decimal' ref={inputValor} />
          <input placeholder='Banco' name='banco' type='text' ref={inputBanco} />
          <input placeholder='Histórico' name='historico' type='text' ref={inputHistorico} />
          <button type='button' onClick={registrarLancamento}>Registrar</button>
        </form>



      </div>

      <h1>Despesas já registradas</h1>
      {lancamentos.map(item => (
        <div key={item.id} className='card'>
          <div>
            <p>Nome: <span>{item.nome}</span></p>
            <p>Valor: <span>R${item.valor}</span></p>
            <p>Banco: <span>{item.banco}</span></p>
            <p>Histórico: <span>{item.historico}</span></p>
          </div>
          <button onClick={() => deletarLancamento(item.id)}>
            <img src={Trash} className="img-lixeira" />
          </button>
        </div>
      ))}
    </div>
  )

}

export default Home;