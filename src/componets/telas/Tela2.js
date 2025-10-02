import React from "react";

const estilos = {
  btn: {
    backgroundColor: "red",
    color: "white",
    padding: "5px 50px",
    margin: "20px 10px",
    borderRadius: 20,
  },
  inputs: {
    padding: "2px",
    margin: "7px",
  },
  equacao: {
    margin: "7px",
  },
  resultado: {
    whiteSpace: "pre-line",
  },
};
export default function Tela2() {
  const [valorA, setValorA] = React.useState();
  const [valorB, setValorB] = React.useState();
  const [valorC, setValorC] = React.useState();
  const [delta, setDelta] = React.useState();
  const [x1, setX1] = React.useState();
  const [x2, setX2] = React.useState();

  return (
    <div>
      <h3> FÒRMULA DE BHASKARA </h3>
      <div>
        <label style={estilos.labels}> Digite o valor de A:</label>
        <input
          type="number"
          name="valorA"
          style={estilos.inputs}
          value={valorA}
          onChange={(e) => setValorA(e.target.value)}
        />
        <label> Digite o valor de B:</label>
        <input
          type="number"
          name="valorB"
          style={estilos.inputs}
          value={valorB}
          onChange={(e) => setValorB(e.target.value)}
        ></input>
        <label> Digite o valor de C:</label>
        <input
          type="number"
          name="valorC"
          style={estilos.inputs}
          value={valorC}
          onChange={(e) => setValorC(e.target.value)}
        ></input>
      </div>
      <div>
        <p style={estilos.equacao}>
          Equação formada: {valorA}x²
          {valorB < 0 ? `${valorB}x` : `+${valorB}x`}
          {valorC < 0 ? `${valorC}` : `+${valorC}`}
        </p>
        <button style={estilos.btn} onClick={() => calcular()}>
          {" "}
          Calcular{" "}
        </button>
        <p> Valor de Delta:{delta}</p>
        <br></br>
        <p>RESULTADO</p>
        <br></br>
        <p style={estilos.resultado}>
          {delta <= 0
            ? `A equacão não possuì raizes, pois o delta é negativo  `
            : ` Raiz 1 =  ${x1}` + "\n" + `Raiz 2 =  ${x2}`}
        </p>
      </div>
    </div>
  );

  function calcular() {
    let a = parseFloat(valorA);
    let b = parseFloat(valorB);
    let c = parseFloat(valorC);

    let valorDelta = Math.pow(b, 2) - 4 * a * c;
    setDelta(valorDelta);

    if (valorDelta >= 0) {
      let valorX1 = (-b + Math.sqrt(valorDelta)) / (2 * a);
      let valorX2 = (-b - Math.sqrt(valorDelta)) / (2 * a);
      setX1(valorX1.toFixed(2));
      setX2(valorX2.toFixed(2));
    }
  }
}
