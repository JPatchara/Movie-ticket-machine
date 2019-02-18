import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Mainpage from './components/mainpage'
import logo from './static/images/Cinemalogo.png';
import './static/styles/welcome.css';
import { Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            <link rel="stylesheet" type="text/css" href="../static/styles/welcome.css" />
          </header>
          <img className="img" src={logo} alt=""/>
          <div className="welcomeBTN">
            <WrappedLink to="/mainpage"/>
          </div>

          <Switch>
            <Route path="/mainpage" component={Mainpage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const WrappedLink = () => {
  return (
    <Button color='yellow'>
      <Link style={{display: 'block', height: '100%'}} to="/mainpage">
      <p>Choose your movie</p></Link>
    </Button>
  )
}

export default App;
