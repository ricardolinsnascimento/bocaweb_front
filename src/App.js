import './App.css';
import {Component} from 'react';
import { Cabecalho } from './components/Cabecalho';
import { Lista } from './components/Lista';
import { Busca } from './components/Busca';

class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){  
    this.carregaODAs();
    
  }
  
  carregaODAs(){
    const {busca} = this.state;
    fetch('http://www.bocaweb.com.br/apibocaweb?nome='+busca)     
    .then(response => response.json())
    .then(odas => this.setState({odas})) ;
    
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }
  
  render(){
    const {busca, odas} = this.state;
    return (
      <section className = "container">      
        <Cabecalho/>

        <Busca
          busca={this.state.busca}
          buscaODA={this.buscaODA}
        />

        {/* <div className = 'busca'>          
          <input 
            name='busca'
            type ='text'
            value={this.state.busca}             
            placeholder='O que deseja buscar'
            onChange={this.buscaODA}          
          />
        </div>
        */}
        <div className = 'lista'>
        <p> {odas.length} odas </p>
          {odas.map(oda => (
           <Lista
              nome={oda.nome}
              usuario={oda.usuario}
              descricao={oda.descricao}
           />
          ))}
        </div>
      </section>
    )  
  }
}

export default App;
