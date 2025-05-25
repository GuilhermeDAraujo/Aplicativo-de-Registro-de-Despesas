import './style.css'
import Trash from '../../assets/trash.png'

function Home() {

  return (
    <div className='container'>
      <div className='from-wrapper'>
        <form>
          <h1>Registrar Despesa</h1>
          <input placeholder='Nome' name='nome' type='text'/>
          <input placeholder='Valor' name='valor' type='decimal'/>
          <input placeholder='Banco' name='banco' type='text'/>
          <input placeholder='Histórico' name='historico' type='text'/>
          <button type='button'>Registrar</button>
        </form>
      </div>
    </div>
  )

}

export default Home;