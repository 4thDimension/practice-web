/* @flow */
import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import HomeBg from './home-bg.jpg';
import classes from './HomeView.scss';

type Props = {};

export class HomeView extends React.Component<void, Props, void> {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand className={classes['logo']}>
              <a href='#'>NextHome</a>
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
        <div className={classes['main']} style={{backgroundImage: `url(${HomeBg})`}}>
          <div className='container text-center'>
            <h1 className={classes['main-text']}>
              Easier to find your perfect new home
            </h1>
            <form className={classes['subscribe-form']}>
              <label>Be the first to subscribe and get access to premuim features</label>
              <div className='row'>
                <div className='col-sm-6 col-sm-offset-3'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <input type='email' placeholder={'Your Email'} />
                    </div>
                    <div className='col-sm-4' >
                      <button type='button'> Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeView;
