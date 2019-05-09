import React, { Component } from "react";
import api from "../../services/api";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
// import { Container } from './styles';

export default class Pessoas extends Component {
  state = {
    funcionarios: []
  };

  async componentDidMount() {
    const funcs = await api.get("/Funcionario");
    console.log(funcs.data);
    this.setState({ funcionarios: funcs.data });
    // [{"id":"6c526cf2-94aa-4600-b91e-d4e84c7f1c96","matricula":"01","nome":"Octávio Barbosa","cpf":"08441086699","nis":"00000000000","funcao":"DESENVOLVEDOR DE SOFTWARE","categoria":"101"}]
  }

  render() {
    const { funcionarios } = this.state;
    return (
      <div className="App-header">
        <Link to={`pessoa`}>
          <Button type="button" color="success">
            <Add />
          </Button>
        </Link>
        <Table
          tableHeaderColor="primary"
          tableHead={[
            "CPF",
            "MATRICULA",
            "NIS",
            "NOME",
            "FUNCÃO",
            "CATEGORIA",
            "AÇÃO"
          ]}
          tableData={funcionarios}
        />
      </div>
    );
  }
}
