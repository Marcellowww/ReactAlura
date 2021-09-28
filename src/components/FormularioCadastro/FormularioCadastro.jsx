import React, { Component } from 'react'
import './style.css'
class FormularioCadastro extends Component{
    render(){
        return(
            <form className="form-cadastro">
                <input type="text" placeholder="Título" className="form-cadastro_input"/>
                <textarea placeholder="Escreva sua nota..." className="form-cadastro_input"/>
                <button className="form-cadasto_input form-cadastro_submit">Criar Nota</button>
            </form> 
        );
        
    }
}

export default FormularioCadastro;