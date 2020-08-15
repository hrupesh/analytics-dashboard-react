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
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  data1,
  data2,
  data3,
  data4,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      isOpenedMonth: false,
      isOpenedYear: false,
      selectedMonth: "January",
      selectedYear: 2020,
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  toggleMonth = () => {
    this.setState({
      isOpenedMonth: !this.state.isOpenedMonth,
    });
  };

  toggleYear = () => {
    this.setState({
      isOpenedYear: !this.state.isOpenedYear,
    });
  };

  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1",
    });
  };
  render() {
    return (
      <>
        {/* Page content */}
        <Container className="" style={{ paddingTop: 120 }} fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="bg-white">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h2 className="text-dark mb-0">Daily Visitors</h2>
                    </div>
                    <div className="col-2">
                      <Nav className="justify-content-end" pills>
                        <Dropdown
                          isOpen={this.state.isOpenedMonth}
                          toggle={this.toggleMonth}
                        >
                          <DropdownToggle caret>
                            {this.state.selectedMonth}
                          </DropdownToggle>
                          <DropdownMenu className="cstm-dropdown-menu">
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "January" })
                              }
                            >
                              January
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "February" })
                              }
                            >
                              February
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "March" })
                              }
                            >
                              {" "}
                              March{" "}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "April" })
                              }
                            >
                              {" "}
                              April{" "}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "May" })
                              }
                            >
                              {" "}
                              May{" "}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "June" })
                              }
                            >
                              {" "}
                              June{" "}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "July" })
                              }
                            >
                              {" "}
                              July{" "}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "August" })
                              }
                            >
                              {" "}
                              August{" "}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "September" })
                              }
                            >
                              {" "}
                              September{" "}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "October" })
                              }
                            >
                              {" "}
                              October{" "}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "November" })
                              }
                            >
                              {" "}
                              November{" "}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedMonth: "December" })
                              }
                            >
                              {" "}
                              December{" "}
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </Nav>
                    </div>
                    <div className="col-2">
                      <Nav className="justify-content-end" pills>
                        <Dropdown
                          isOpen={this.state.isOpenedYear}
                          toggle={this.toggleYear}
                        >
                          <DropdownToggle caret>
                            {this.state.selectedYear}
                          </DropdownToggle>
                          <DropdownMenu className="cstm-dropdown-menu">
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedYear: 2020 })
                              }
                            >
                              2020
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedYear: 2019 })
                              }
                            >
                              2019
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedYear: 2018 })
                              }
                            >
                              2018
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedYear: 2017 })
                              }
                            >
                              2017
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={() =>
                                this.setState({ selectedYear: 2016 })
                              }
                            >
                              2016
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Header />
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Most Visited Pages</h3>
                    </div>
                    <div className="col text-right">
                      {/* <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button> */}
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Page name</th>
                      <th scope="col">Visitors</th>
                      <th scope="col">Unique Page Visits</th>
                      <th scope="col">Bounce rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        /store/
                        <i
                          className="far fa-caret-square-up text-muted float-right mr-0"
                          style={{ fontSize: 20 }}
                        />
                      </th>
                      <td>4,890</td>
                      <td>3,985</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          81.56%
                          <div
                            className="chart"
                            style={{ height: 40, width: 100 }}
                          >
                            <Line data={data1} options={data1.options} />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /store/sybols-styleguides
                        <i
                          className="far fa-caret-square-up text-muted float-right mr-0"
                          style={{ fontSize: 20 }}
                        />
                      </th>
                      <td>3,785</td>
                      <td>3,182</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          62.56%
                          <div
                            className="chart"
                            style={{ height: 40, width: 100 }}
                          >
                            <Line data={data2} options={data1.options} />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /store/dashboard-ui-kit
                        <i
                          className="far fa-caret-square-up text-muted float-right mr-0"
                          style={{ fontSize: 20 }}
                        />
                      </th>
                      <td>2,985</td>
                      <td>2,115</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          58.76%
                          <div
                            className="chart"
                            style={{ height: 40, width: 100 }}
                          >
                            <Line data={data3} options={data1.options} />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /store/webflow-cards.html
                        <i
                          className="far fa-caret-square-up text-muted float-right mr-0"
                          style={{ fontSize: 20 }}
                        />
                      </th>
                      <td>2,440</td>
                      <td>1,789</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                         39.59%
                          <div
                            className="chart"
                            style={{ height: 40, width: 100 }}
                          >
                            <Line data={data4} options={data1.options} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Social traffic</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Referral</th>
                      <th scope="col">Visitors</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Facebook</th>
                      <td>1,480</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span>
                          <div>
                            <Progress
                              max="100"
                              value="60"
                              barClassName="bg-gradient-danger"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Facebook</th>
                      <td>5,480</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">70%</span>
                          <div>
                            <Progress
                              max="100"
                              value="70"
                              barClassName="bg-gradient-success"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Google</th>
                      <td>4,807</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">80%</span>
                          <div>
                            <Progress max="100" value="80" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Instagram</th>
                      <td>3,678</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">75%</span>
                          <div>
                            <Progress
                              max="100"
                              value="75"
                              barClassName="bg-gradient-info"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">twitter</th>
                      <td>2,645</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">30%</span>
                          <div>
                            <Progress
                              max="100"
                              value="30"
                              barClassName="bg-gradient-warning"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
