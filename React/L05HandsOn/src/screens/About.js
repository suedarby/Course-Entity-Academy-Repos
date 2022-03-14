import React from 'react';
import ReactDOM from 'react-dom';
//imports the Header component
import Header from '../components/Header';
//must use className for css
const About = () => (
    <div className='container'>
      <h2>About</h2>
      <p>I based  this off of my <a href='www.suestinycostumes.com'>doll site</a> as I'm very familiar with the site's structure! Please understand that I am just learning routing.</p>
    </div>
  );
  
  export default About;