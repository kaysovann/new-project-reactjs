import React, { Component } from 'react';
import './index.scss';
import styles, { } from './App.scss';


class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <p className={styles.intro}>
            ReactJs
          </p>
        </div>
        <div className="container" />
      </div>
    );
  }
}

export default App;

