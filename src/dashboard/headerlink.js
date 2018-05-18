import React, { Component } from 'react';
import styles, { } from '../App.scss';

class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <div className={styles['main-panel']}>
          <nav className={[styles.navbar, styles['navbar-default']].join(' ')}>
            <div className={styles['container-fluid']}>
              <div className={styles['navbar-header']}>
                {/* <button type="button" className="navbar-toggle collapsed">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar">g</span>
                  <span className="icon-bar">g</span>
                  <span className="icon-bar">g</span>
                </button> */}
              </div>
              <div className={styles['navbar-collapse']}>
                <a href="#pablo" className={styles['navbar-brand']}>Dashboard</a>
                <div>
                  <ul className={[styles.nav, styles['navbar-nav']].join(' ')}>
                    <li role="presentation" className="">
                      <a href="/" role="button">
                        <i className={[styles.fa, styles['fa-dashboard']].join(' ')} />
                        <p className={[styles['hidden-lg'], styles['hidden-md']].join(' ')}>Dashboard</p>
                      </a>
                    </li>
                    <li role="presentation" className="">
                      <a href="/" role="button">
                        <i className={[styles.fa, styles['fa-search']].join(' ')} />
                        <p className={[styles['hidden-lg'], styles['hidden-md']].join(' ')}>Search</p>
                      </a>
                    </li>
                  </ul>
                  <ul className={[styles.nav, styles['navbar-nav'], styles['navbar-right']].join(' ')}>
                    <li role="presentation" className="">
                      <a href="/" role="button">Account</a>
                    </li>
                    <li role="presentation" className="">
                      <a href="/" role="button">Log out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default HeaderLinks;
