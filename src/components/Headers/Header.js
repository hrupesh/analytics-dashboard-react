/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import Chart from "chart.js";

import { Line, Bar } from "react-chartjs-2";

import {
  chartOptions,
  parseOptions,
  chartExample3,
  data1,
  data2,
  data3,
  data4,
} from "variables/charts.js";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header pb-1 pt-1 pt-xl-5 pt-md-2">
          <Container>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3" className="pl-0 pl-md-3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody className="cstm-card-body">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Realtime Users
                      </CardTitle>
                      <span className="cstm-card-value font-weight-bold mb-0 py-2">
                        56
                      </span>
                      <span className="cstm-card-diff">
                        +9.8%
                        <i
                          className="fas fa-chart-line "
                          style={{ fontSize: 20, marginLeft: 12 }}
                        ></i>
                      </span>
                      <div
                        className="chart"
                        style={{ height: 60, width: "100%" }}
                      >
                        <Line data={data1} options={data1.options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody className="cstm-card-body">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Total Visits
                      </CardTitle>
                      <span className="cstm-card-value font-weight-bold mb-0 py-2">
                        54,598
                      </span>
                      <span className="cstm-card-diff text-danger">
                        -11.9%
                        <i
                          className="fas fa-sort-amount-down text-danger"
                          style={{ fontSize: 20, marginLeft: 12 }}
                        ></i>
                      </span>
                      <div
                        className="chart"
                        style={{ height: 60, width: "100%" }}
                      >
                        <Line data={data2} options={data2.options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody className="cstm-card-body">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Bounce Rate
                      </CardTitle>
                      <span className="cstm-card-value font-weight-bold mb-0 py-2">
                        73.67%
                      </span>
                      <span className="cstm-card-diff">
                        +12.2%
                        <i
                          className="fas fa-chart-line "
                          style={{ fontSize: 20, marginLeft: 12 }}
                        ></i>
                      </span>
                      <div
                        className="chart"
                        style={{ height: 60, width: "100%" }}
                      >
                        <Line data={data3} options={data3.options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3" className="pr-0 pr-md-3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody className="cstm-card-body">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Visit Duration
                      </CardTitle>
                      <span className="cstm-card-value font-weight-bold mb-0 py-2">
                       1m 4s
                      </span>
                      <span className="cstm-card-diff">
                        +19.6%
                        <i
                          className="fas fa-chart-line "
                          style={{ fontSize: 20, marginLeft: 12 }}
                        ></i>
                      </span>
                      <div
                        className="chart"
                        style={{ height: 60, width: "100%" }}
                      >
                        <Line data={data4} options={data4.options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
