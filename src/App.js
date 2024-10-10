import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      try {
        const result = eval(display.replace("÷", "/"));
        setDisplay(result.toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "TURLA") {
      setDisplay("Cristopher Ian Turla");
    } else {

      setDisplay((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator of Cristopher Ian Turla - IT3A</h1>
      <div className="display">{display}</div>
      <div className="keypad">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("÷")}>÷</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleButtonClick("TURLA")}>TURLA</button>
      </div>
    </div>
  );
};

export default App;