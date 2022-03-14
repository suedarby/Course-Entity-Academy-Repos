import React from 'react';
import ReactDOM from 'react-dom';
//imports the Header component
import Header from '../components/Header';
//must use className for css
const Home = () => (
  <div className='container-fluid'>
    <h2>Home</h2>
    <p>I am very excited about this! I am enjoying learning React and find it to be one of the best things I've learned lately</p>
  </div>
);

export default Home;