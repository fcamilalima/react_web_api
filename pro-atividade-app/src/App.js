import {useState} from 'react';
import './App.css';

let initialState = [
{
  id:1,
  descricao: 'Primeira Atividade',
},
{
  id:2,
  descricao: 'Segunda Atividade',
}
];

function App() {
  const [atividades, setAtividades] = useState(initialState)
  function addAtividade(e){
    e.preventDefault();

    const atividade = {
      id: document.getElementById("id").value,
      descricao: document.getElementById("descricao").value,
    }

    atividades.push(atividade);
    console.log(atividades);
    setAtividades([...atividades, {...atividade}]);
  }

  return (
    <>
      <form>
        <input id="id" type='text' placeholder='id' />
        <input id="descricao" type='text' placeholder='descricao' />
        <button onClick={addAtividade}>+ Atividade</button>
      </form>
      <div className="App">
        <header className="App-header">
          <ul className="list-group">
            {atividades.map(ativ => (
              <li key={ativ.id} className="list-group-item">{ativ.id} - {ativ.descricao}</li>
            ))}
          </ul> 
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
