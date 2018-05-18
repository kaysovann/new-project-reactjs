import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import '../index.scss';

import HeaderLinks from './headerlink';

import imagine from '../public/img/sidebar-3.jpg';
import logo from '../public/img/reactlogo.png';

import styles, { } from '../App.scss';

import dashboardRoutes from './dashboardroute';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  activeRoute(routeName) { // eslint-disable-line
    console.log('print', routeName); //eslint-disable-line
    if (routeName === '/dashboard') {
      return 'active';
    }
    return '';
    // return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // eslint-disable
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: `url(${imagine})`,
    };
    return (
      <div
        id="sidebar"
        className={styles.sidebar}
        data-color="black"
        data-image={imagine}
      >
        <div className={styles['sidebar-background']} style={sidebarBackground} />
        <div className={styles.logo}>
          <a
            href="https://www.creative-tim.com"
            className={[styles['simple-text'], styles['logo-mini']].join(' ')}
          >
            <div className={styles['logo-img']}>
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="https://www.creative-tim.com"
            className={[styles['simple-text'], styles['logo-normal']].join(' ')}
          >
            Creative Tim
          </a>
        </div>
        <div className={styles['sidebar-wrapper']}>
          <ul className={styles.nav}>
            {this.state.width <= 991 ? <HeaderLinks /> : null}
            {dashboardRoutes.map((prop, key) => {
              if (!prop.redirect) {
                return (
                  <li
                    className={
                      prop.upgrade
                        ? [styles.active, styles['active-pro']].join(' ')
                        : styles[this.activeRoute(prop.path)]
                    }
                    key={key} // eslint-disable-line
                  >
                    <NavLink
                      to={prop.path}
                      className={styles['nav-link']}
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
