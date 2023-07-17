import {useState} from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

let initialState = [
{
  id: 1,
  descricao: 'Primeira Atividade',
  prioridade: '3',
  titulo: 'Título 1',
},
{
  id: 2,
  descricao: 'Segunda Atividade',
  prioridade: '2',
  titulo: 'Título 2',
}
];

function App() {
  const [atividades, setAtividades] = useState(initialState)
  const [atividade, setAtividade] = useState({})

  function addAtividade(e){
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value
    }
    
    console.log(atividades);
    setAtividades([...atividades, {...atividade}]);
  }

  function pegarAtividade(id) {
    const atividadeEditada = atividades.filter(atividade => atividade.id)
    setAtividade(atividadeEditada[0])
  }
  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }
    
  return (
    <>
      <AtividadeForm 
        addAtividade={addAtividade}
        ativSelecionada={atividade}
        atividades={atividades}
      />
      <AtividadeLista 
        atividades={atividades}
        atividade={atividade}
        pegarAtividade={pegarAtividade}
        deletarAtividade={deletarAtividade}
      />
    </>
  );
}

export default App;
