import React, { Component } from "react";
import "./style.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {

    this.titulo = evento.target.value;
    
  }

  _handleMudancaTexto(evento) {
    this.texto = evento.target.value;
    
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    if(this.titulo === '' && this.texto === '')return
    this.props.criarNota(this.titulo, this.texto);
  }
  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          rows={10}
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadasto_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
