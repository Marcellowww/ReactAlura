import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro/'
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/app.css'
import './assets/index.css';
class App extends Component {

    constructor() {
        super()
        this.notas = []
        this.state = {
            notas: [],
            categorias: [],
        }
    }

    criarNota(titulo, texto, categoria) {
        const novaNota = { titulo, texto, categoria };
        const novoArrayNotas = [...this.state.notas, novaNota]
        const novoEstado = { notas: novoArrayNotas }
        this.setState(novoEstado)
    }

    adicionarCategoria(nomeCategoria) {
        const novoArrayCategoria = [...this.state.categorias, nomeCategoria]
        const novoEstado = { ...this.state, categorias: novoArrayCategoria };
        this.setState(novoEstado);
    }

    deletarNota(index) {
        let arrayNotas = this.state.notas
        arrayNotas.splice(index, 1)
        this.setState({ notas: arrayNotas })
    }

    render() {
        return (
            <main className='conteudo'>
                <FormularioCadastro 
                    categorias={this.state.categorias} criarNota={this.criarNota.bind(this)} />
                <div className='conteudo-principal'>
                    <ListaDeCategorias
                        adicionarCategoria={this.adicionarCategoria.bind(this)}
                        categorias={this.state.categorias} />
                    <ListaDeNotas
                        apagarNota={this.deletarNota.bind(this)}
                        notas={this.state.notas}
                    />
                </div>
            </main>
        );
    }
}

export default App;