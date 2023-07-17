import { useState } from 'react';
import Atividade from './Atividade';

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState({});

  const inputTextHandler = (e) => {
    const {name, value} = e.target;
    setAtividade({...atividade, [name]: value});
  }

//   Math.max.apply(
//     Math, 
//     props.atividade.map(item => item.id)
//   ) + 1 

  return (
    <form className="row g-3">
        <div className="col-md-6">
        <label className="form-label">
            Id
        </label>
        <input 
            name="id"
            id="id" 
            onChange={inputTextHandler}
            type="text" 
            className="form-control" 
            value={atividade.id} 
        />
        </div>
        <div className='col-md-6'>
        <label className='form-label'>Prioridade</label>
        <select 
            id="prioridade" 
            name="prioridade" 
            className="form-select" 
            onChange={inputTextHandler}
            value={atividade.prioridade}
        >
            <option defaultValue="0">Selecione..</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
        </select>
        </div>
        <div className='col-md-6'>
        <label className='form-label'>
            Título
        </label>
        <input 
            id='titulo' 
            name='titulo' 
            onChange={inputTextHandler}
            type='text' 
            className='form-control'
            value={atividade.titulo} 
        />
        </div>    
        <div className='col-md-6'>
        <label className='form-label'>
            Descrição
        </label>
        <input 
            id='descricao' 
            name='descricao' 
            onChange={inputTextHandler}
            type='text' 
            className='form-control' 
            value={atividade.descricao}
        />
        </div>
        <hr />
        <div className='col-md-6'>
        <button 
            className='btn btn-outline-secondary' 
            onClick={props.addAtividade}>
            + Atividade
        </button>
        </div>
    </form>
  )
}
