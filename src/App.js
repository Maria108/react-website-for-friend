import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import About from './components/about.js';
import Blog from './components/blog.js';
import Faq from './components/faq.js';
import Customers from './components/customers.js';
import Contacts from './components/contacts.js';
import Maps from './components/map.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Faq" component={Faq} />
          <Route exact path="/Customers" component={Customers} />
          <Route exact path="/Contacts" component={Contacts} />
          <Route exact path="/Maps" component={Maps} />
          <Route path="/instagram" component={() => (window.location = 'https://www.instagram.com/elenabykova.ig/')} />
          <Route
            path="/map"
            component={() =>
              (window.location =
                'https://www.google.com/maps/dir//Park+Slope+Colonics,+7th+Street,+Brooklyn,+NY/@40.7136227,-74.0399837,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25bfecdb8bcc7:0x40af216f52f8c20a!2m2!1d-73.9858381!2d40.6708317')
            }
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
