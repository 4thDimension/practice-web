/* @flow */
import React from 'react';
import HomeBg from '../../App/assets/home-bg.jpg';
import classes from '../../Home/HomeView.scss';
import Navigation from '../../App/components/navigation';

class ThankYou extends React.Component {

  render () {
    return (
      <div style={{height: '100%'}}>
        <Navigation />
        <div className={classes['main']} style={{backgroundImage: `url(${HomeBg})`}}>
          <div className='container text-center'>
            <h1 className={classes['main-text']}>
              Thank You your email has been saved
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
