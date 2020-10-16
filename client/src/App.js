import React, { Component } from 'react'
import ContactCard from './components/contactPage/ContactCard';
import Navbar from "./components/navbar/Navbar";
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';


import Page1 from './components/contactPage/ContactCard';

import Page2 from './components/homePage/HomeJumbotron';

import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }
  render() {

    return (
<div className="App">
  <Router>
    <div>
    {/*Not sure what is hapening here but it works i guess */}
      <Navbar />
      <Switch>
        <Route exactly pattern="/" />
      </Switch>
    </div>
  </Router>
</div>

    )
  }
}

export default App



