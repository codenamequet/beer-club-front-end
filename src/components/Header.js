import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import '../styles/Header.css'
import Landing from './Landing'
import Shop from './Shop'
import Login from './Login'

// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div>
        <Router>
        <div>
          <div>
            <Navbar className='#ffca28 amber lighten-1' brand='Dollar Beer Club' right>
              {/* <div className='waves-effect waves-light btn #ff8f00 amber darken-3 centered-header'><Link to='/shop'>Get A Pint Today!</Link></div> */}
              <NavItem href='#'><div className=''><Link to='/logon'>Sign In</Link></div></NavItem>
              <NavItem href='#'><div className=''><Link to='/register'>Sign Up</Link></div></NavItem>
              <NavItem href='#about'><div className=''>About</div></NavItem>
              <NavItem href='#products'><div className=''><Link to='/shop'>Crafted Beers</Link></div></NavItem>
            </Navbar>
          </div>

          <div>
            <Switch>
              <Route path='/shop' component={Shop} />
              <Route path='/logon' component={Login}/>
              <Route path='/register' component={Shop}/>
              <Route path='/' component={Landing} />
            </Switch>
          </div>
        </div>
        </Router>
      </div>
    )
  }
}

export default Header
