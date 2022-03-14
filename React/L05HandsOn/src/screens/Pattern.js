import React from 'react';
import ReactDOM from 'react-dom';
//imports the Header component
import Header from '../components/Header';
//must use className for css
//Pattern = Topic
//patternId = topicId
const Pattern = ({ match }) => (
    <div className='container'>
      <h3>{match.params.patternId}</h3>
    </div>
  );
  
  export default Pattern;

  