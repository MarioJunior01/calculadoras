import React from "react";

const estilos = {
  btn: {
    backgroundColor: "purple",
    color: "white",
    padding: "5px 15px",
    margin: "20px 10 px",
    borderRadius: 10,
  },
  btn1: {
    backgroundColor: "green",
    color: "white",
    padding: "5px 15px",
    margin: "20px 5px",
    borderRadius: 10,
  },
};

export default function Tela3() {
  //variaveis de estado
  const [num1, setNum1] = React.useState(10);
  const [res, setRes] = React.useState();

  function Converter() {
    //CASTIN String to number
    let n1 = Number(num1);
    let pa1 = n1 * 1.8 + 32;

    setRes(pa1);
  }

  return (
    <div>
      <h3>Calculadora de Graus e Fahrenheit</h3>
      <div>
        <label htmlFor="num1">Graus </label>
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />{" "}
        <br /> <br />
        <button style={estilos.btn} onClick={() => Converter()}>
          Converter
        </button>
        <p>resultado em Fahrenheit : {res}</p>
      </div>
    </div>
  );
}
