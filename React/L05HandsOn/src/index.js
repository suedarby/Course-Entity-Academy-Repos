import React from 'react';
import ReactDOM from 'react-dom';
//must use className for css
import { render } from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Patterns from './screens/Patterns';
//Patterns = Topics

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Index = ({ pathname }) => {
  switch (pathname) {
    case '/about':
      return <About />;
    case '/patterns':
      return <Patterns />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});

const App = () => (
  <Router>
    <div className='container'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Patterns">Patterns</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/patterns" component={Patterns} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));

