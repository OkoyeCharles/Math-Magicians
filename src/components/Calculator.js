import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../styles/Calculator.css';

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const { total, next } = state;

  const handleClick = (e) => {
    const newState = calculate(state, e.target.innerText);
    setState(newState);
  };

  return (
    <div className="calculator__container">
      <div className="div calculator__field">
        <input type="number" defaultValue={next} disabled="disabled" />
        <input type="number" defaultValue={total} disabled="disabled" />
      </div>
      <button type="button" className="calc__AC" onClick={handleClick}>AC</button>
      <button type="button" className="calc__plusMinus" onClick={handleClick}>+/-</button>
      <button type="button" className="calc__percent" onClick={handleClick}>%</button>
      <button type="button" className="calc__divide" onClick={handleClick}>÷</button>
      <button type="button" className="calc__seven" onClick={handleClick}>7</button>
      <button type="button" className="calc__eight" onClick={handleClick}>8</button>
      <button type="button" className="calc__nine" onClick={handleClick}>9</button>
      <button type="button" className="calc__mult" onClick={handleClick}>x</button>
      <button type="button" className="calc__four" onClick={handleClick}>4</button>
      <button type="button" className="calc__five" onClick={handleClick}>5</button>
      <button type="button" className="calc__six" onClick={handleClick}>6</button>
      <button type="button" className="calc__minus" onClick={handleClick}>-</button>
      <button type="button" className="calc__one" onClick={handleClick}>1</button>
      <button type="button" className="calc__two" onClick={handleClick}>2</button>
      <button type="button" className="calc__three" onClick={handleClick}>3</button>
      <button type="button" className="calc__plus" onClick={handleClick}>+</button>
      <button type="button" className="calc__zero" onClick={handleClick}>0</button>
      <button type="button" className="calc__period" onClick={handleClick}>.</button>
      <button type="button" className="calc__equal" onClick={handleClick}>=</button>
    </div>
  );
}

export default Calculator;
