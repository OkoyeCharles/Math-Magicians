import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator__container">
        <div className="div calculator__field">
          <input type="number" />
        </div>
        <button type="button" className="calc__AC">AC</button>
        <button type="button" className="calc__plusMinus">+/-</button>
        <button type="button" className="calc__percent">%</button>
        <button type="button" className="calc__plus">÷</button>
        <button type="button" className="calc__seven">7</button>
        <button type="button" className="calc__eight">8</button>
        <button type="button" className="calc__nine">9</button>
        <button type="button" className="calc__mult">x</button>
        <button type="button" className="calc__four">4</button>
        <button type="button" className="calc__five">5</button>
        <button type="button" className="calc__six">6</button>
        <button type="button" className="calc__minus">-</button>
        <button type="button" className="calc__one">1</button>
        <button type="button" className="calc__two">2</button>
        <button type="button" className="calc__three">3</button>
        <button type="button" className="calc__plus">+</button>
        <button type="button" className="calc__zero">0</button>
        <button type="button" className="calc__period">.</button>
        <button type="button" className="calc__equal">=</button>
      </div>
    );
  }
}

export default Calculator;
