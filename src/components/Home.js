import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home__container">
      <h1>Welcome to our Page!</h1>
      <p>
        An calculator is typically a portable device used
        to perform calculations, ranging from basic arithmetic to complex
        mathematics.
      </p>
      <p>
        In addition to general purpose calculators, there are those designed for specific markets.
        For example, there are scientific calculators which include trigonometric and statistical
        calculations.
      </p>
      <span className="home__credit">Credit: Wikepedia</span>
    </div>
  );
}

export default Home;
