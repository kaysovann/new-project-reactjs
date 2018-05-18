import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styles, { } from '../App.scss';
import StatsCard from './Card';

class Content extends Component {
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.content}>
          <Grid fluid>
            <Row>
              <Col lg={3} sm={6}>
                <StatsCard
                  bigIcon={<i className="pe-7s-server text-warning" />}
                  statsText="Capacity"
                  statsValue="105GB"
                  statsIcon={<i className="fa fa-refresh" />}
                  statsIconText="Updated now"
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Content;
