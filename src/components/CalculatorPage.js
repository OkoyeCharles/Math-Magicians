import React from 'react';
import Calculator from './Calculator';
import './CalculatorPage.css';

function CalculatorPage() {
  return (
    <div className="calculator__page">
      <header>Let&apos;s do some math</header>
      <Calculator />
    </div>
  );
}

export default CalculatorPage;
