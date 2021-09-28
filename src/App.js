import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro/'
import './assets/app.css'
import './assets/index.css';
class App extends Component{
    
    render() {
        return( 
            <main className='conteudo'>
                <FormularioCadastro/>
                <ListaDeNotas/>
            </main>
        );
    }
}

export default App;