import React from 'react';
import ReactDOM from 'react-dom';
//imports the Header component
import Header from '../components/Header';
//imports Pattern single item as a link to the pages
import Pattern from './Pattern';
//routes the link from this page to the pattern page
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//Patterns = Topics
//must use className for css
//uses match to send the user to the correct page
const Patterns = ({ match }) => (
  <div className='container'>
    <h2>Patterns</h2>
    <Route
    exact
    path={match.url}
    render={() => <h3>Please select a pattern type.</h3>}
  />
    <ul>
      <li>
        <Link to={`${match.url}/miniatures`}>Miniature Dolls</Link>
      </li>
      <li>
        <Link to={`${match.url}/child`}>Children Dolls</Link>
      </li>
      <li>
        <Link to={`${match.url}/lady`}>Lady Dolls</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:patternId`} component={Pattern} />

  </div>
);

export default Patterns;