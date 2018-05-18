import React, { Component } from 'react';
import '../index.scss';
import styles, { } from '../App.scss';
import Sidebar from './sidebar';
import Headerlink from './headerlink';
import Footer from './footer';
import Content from './content';

class Dashboard extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Headerlink />
        <div className="container">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
