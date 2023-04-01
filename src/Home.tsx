import styles from './My.module.css';
import React from 'react';

function TopBanner() {
  return (
    <div>
      <div className="row">
        <div className="col align-self-center text-start">
          <h1>This website is home to Joel Hilton's Movie Collection.</h1>
        </div>
        <div className="align-self-center">
          <img
            src={require('./JoelHiltonHeadshot.jpg')}
            alt="Joel Hilton Headshot"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
