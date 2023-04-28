import Notepad from './Notepad/Notepad'; //importando o componente
import './App.css';
import { Component } from 'react';

class App extends Component {
//criando o state
//meu objeto com as propriedades
    state = {
      //array de objetos com os dados das propriedades passadas ao componente
        notes: [
          {
            key: "1245",
            titulo: "Lista de tarefas",
            data: new Date(2023, 4, 28),
            nota: "1-Arrumar meu quarto;<br>2-Fazer almoço;<br>3-Limpar a Garagem"
          },
          {
            key: "4785",
            titulo: "Anotações da Aula",
            data: new Date(2023, 4, 28),
            nota: " A aula de matemática teve..."
          }
        ]
    }

    //função do botão adiciona nota
    adicionarNota = () => {
      console.log("Adicionando Nota");

      //criando um objeto novo igual o anterior para adicionar a nova nota
      const addNota = {
        key: "2458",
        titulo: "Lambretes",
        data: new Date(),
        nota: "Atualizar projeto amanhã."
      }

      //chamando o state
      this.setState({
        notes: [...this.state.notes, addNota]
      })
    } 

    //função render chamando o state e renderizando cada propriedade
    render(){
      return ( //retornando no DOM
          <div className='App'>
            <h1>Notepad</h1>

            {this.state.notes.map((propNota) => (
              <Notepad
                key= {propNota.key}
                titulo= {propNota.titulo}
                data= {propNota.data}>
                   {propNota.nota} 
                </Notepad>
            ))}

            <button>Adicionar nota</button>
          
          </div>
        )
    }
  
}

export default App;
