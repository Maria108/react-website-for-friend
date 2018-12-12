import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// components
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import About from './components/about.js';
import Customers from './components/customers.js';
import Contacts from './components/contacts.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Customers" component={Customers} />
          <Route exact path="/Contacts" component={Contacts} />
          <Route path="/instagram" component={() => (window.location = 'https://www.instagram.com/elenabykova.ig/')} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
