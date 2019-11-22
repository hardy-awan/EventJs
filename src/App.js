import React, {Component,Fragment} from 'react';
import './style/style.css'
import Home from './home/Home';
// imprt Blogs from './blogs/Blogs';

import Form from './event/Event';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

class App extends Component {
  render(){
    return(
        <Router>
            <div className="wraaper">
                  <div className="header">
                  <div className="navbar">
                           <div className="logo">
                              <img className="imgfluid" src={require('./logo/babastudio-logo.png')} />
                           </div>
                           <div className="menu">
                                <ul>
                                    <Link to="/" className="li">Home</Link>
                                    <Link to="/" className="li">Blogs</Link>
                                    <Link to="/" className="li">Galery</Link>
                                    <Link to="/form" className="li">Kontak</Link>
                                    <Link to="/event" className="li">Simple Event</Link>
                                </ul>
                           </div>
                  </div>
                  </div>
                  <Fragment>
                    {/* <Home/> */}
                    <Route path="/" exact component={Home}/>

                    <Route path="/form" component={Form}/>

                  </Fragment>
            </div>
        </Router>    
    );
  }
}

export default App;