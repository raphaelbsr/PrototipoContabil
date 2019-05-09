import React, { Component } from "react";
import api from "../../services/api";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.jsx";
import Save from "@material-ui/icons/Save";
import ArrowLeft from "@material-ui/icons/KeyboardBackspace";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Container } from './styles';
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: "80%"
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});
class Pessoa extends Component {
  state = {
    cpf: "",
    nome: "",
    matricula: "",
    nis: "",
    id: undefined,
    funcao: "",
    categoria: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      const func = await api.get(`/Funcionario/${id}`);
      this.setState({ ...func.data });
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSave = async () => {
    const { cpf, nome, matricula, nis, id, funcao, categoria } = this.state;
    // PUT funcionario/{id}
    let result = null;
    try {
      if (id) {
        result = await api.put(`/Funcionario/${id}`, {
          id,
          cpf,
          nome,
          matricula,
          nis,
          funcao,
          categoria
        });
      } else {
        result = await api.post(`/Funcionario`, {
          cpf,
          nome,
          matricula,
          nis,
          funcao,
          categoria
        });
      }
      if (result.status === 200) {
        alert("Essa fera meuuuu!!!");
      } else {
        alert("Ta pegando fogo bixxoooo!!!");
      }
    } catch (err) {
      alert(err);
    }
    return false;
  };

  render() {
    const { cpf, nome, matricula, nis, id, funcao, categoria } = this.state;
    const { classes } = this.props;
    return (
      <div className="App-header">
        <form id="form">
          <TextField
            id="text-cpf"
            label="CPF"
            className={classes.textField}
            value={cpf}
            onChange={this.handleChange("cpf")}
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            id="text-matricula"
            fullWidth
            label="Matricula"
            className={classes.textField}
            value={matricula}
            onChange={this.handleChange("matricula")}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            id="text-nis"
            fullWidth
            label="NIS"
            className={classes.textField}
            value={nis}
            onChange={this.handleChange("nis")}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            id="text-nome"
            label="Nome"
            fullWidth
            className={classes.textField}
            value={nome}
            onChange={this.handleChange("nome")}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            id="text-nome"
            label="Função"
            fullWidth
            className={classes.textField}
            value={funcao}
            onChange={this.handleChange("funcao")}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            id="text-nome"
            label="Categoria"
            fullWidth
            className={classes.textField}
            value={categoria}
            onChange={this.handleChange("categoria")}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <div>
            <Button
              onClick={() => {
                this.handleSave();
              }}
              type="button"
              color="info"
            >
              <Save /> Salvar
            </Button>
            <Button
              onClick={() => {
                window.history.back();
              }}
              type="button"
              color="warning"
            >
              <ArrowLeft /> Voltar
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Pessoa);
