import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home__container">
      <header>
        <h1>Welcome to our Page!</h1>
        <h2>
          Making Calculations Accesible anywhere, anytime, anyplace.
        </h2>
      </header>

      <div>
        <p>
          If you ever have a hard time calculating complex equations or finding the right
          operator Math magicians is here for you just with the click of a button.
          <br />
          Here at math magicians we have made calculating equations accesible for anyone...
        </p>
      </div>
    </div>
  );
}

export default Home;
