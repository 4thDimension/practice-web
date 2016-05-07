import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import classes from '../../Home/HomeView.scss';

class Navigation extends React.Component {
  render () {
    return (
      <Navbar className='fixed-nav'>
        <Navbar.Header>
          <Navbar.Brand className={classes['logo']}>
            <Link to='/'>NextHome</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href='#'>about</NavItem>
            <NavItem eventKey={2} href='#'>contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
