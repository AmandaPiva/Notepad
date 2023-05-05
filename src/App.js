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
            nota: `1-Arrumar meu quarto hoje;Fazer lição`
          },
          {
            key: "4785",
            titulo: "Anotações da Aula",
            data: new Date(2023, 4, 28),
            nota: " A aula de matemática teve..."
          }
        ],
        novaNota: { //nosso novo objeto que armazenará nossa nova anotação vindo do form
          titulo: '',
          nota: ''
        }
    }

    //função do botão adiciona nota
    adicionarNota = evento => { //recebe um evento como parâmetro
      console.log("Adicionando Nota");
      evento.preventDefault();

      const addNota = {...this.state.novaNota, data: new Date()} //adiciona a nota no objto vazio criado acima 

      //muda o estado adicionando as infor dos inputs e adicionando no array de objetos com os novos dados
      this.setState({
        notes: [...this.state.notes, addNota],
        novaNota: {titulo: '', nota: ''}
      })
    } 

    //função que dispara eventos (onChange) ao digitar nos campos
    anotando = evento => {
      const {name, value} = evento.target;
      this.setState({novaNota: {...this.state.novaNota, [name]: value}}); //pega os dados digitados nos inputs
    }

    //função remover nota
    removerNota = nota => {
      let listNotas = this.state.notes;
      listNotas = listNotas.filter(c => c !== nota);

      this.setState({notes: listNotas}); //atualizando o estado do array de notas

    }

    //função render chamando o state e renderizando cada propriedade
    render(){
      
      return ( //retornando no DOM
          <div className='App'>
            <div className='listaNotas'>
              <h1>Notepad</h1>

                {this.state.notes.map((propNota, indice) => (
                <Notepad
                  key= {propNota.key}
                  titulo= {propNota.titulo}
                  data= {propNota.data}
                  onRemove= {this.removerNota.bind(this, propNota)} /*propriedade remover nota */>
                    {propNota.nota}
                </Notepad>
              ))}
            </div>
            

            <div className='form'>
              <form method='post' onSubmit={this.adicionarNota} className='novaNota'>
                <div className='titulo'>
                  <input required type="text" name= "titulo" value={this.state.novaNota.titulo} onChange={this.anotando} placeholder='Título...'/>
                </div>

                <div className='textarea'>
                  <textarea style={{whiteSpace: 'pre-wrap'}} name='nota' value={this.state.novaNota.nota} onChange={this.anotando} placeholder='Insira sua nota aqui...' rows="10" cols="40"/>         
                </div>

                <button onClick={this.adicionarNota} className='addnota'>Adicionar nota</button>
              </form>      
            </div>
          </div>
        )
    }
  
}

export default App;
