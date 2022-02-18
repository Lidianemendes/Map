import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    cadastro: [
      {
        name: "Lidiane",
        surname: "Mendes",
        age: 33
      },
      {
        name: "Ivonete",
        surname: "Balbino",
        age: 59
      },
      {
        name: "Leonardo",
        surname: "Zerbone",
        age: 30
      },
      {
        name: "Lilia",
        surname: "Mendes",
        age: 7
      },
      {
        name: "Djair",
        surname: "Silva",
        age: 22
      },
      {
        name: "Juliana",
        surname: "Cunha",
        age: 20
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.cadastro.map((item) => (
          <div className="cad">
            <h2>Nome: {item.name}</h2>
            <h2>Sobrenome: {item.surname}</h2>
            <h2>Idade: {item.age}</h2>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
