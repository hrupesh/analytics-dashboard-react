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
                    <div className="col-2  col-xl-1">
                      <Nav className="justify-content-end" pills>
                        <Dropdown
                          isOpen={this.state.isOpenedMonth}
                          toggle={this.toggleMonth}
                          direction="down"
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
                    <div className="col-2 col-xl-1 ml-xl-5 mr-xl-2">
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
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush " responsive>
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
                      <th scope="row" className="cstm-th">
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
                      <th scope="row" className="cstm-th">
                        /store/symbols-styleguides
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
                            <Line data={data1} options={data1.options} />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="cstm-th">
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
                            <Line data={data1} options={data1.options} />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="cstm-th">
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
                            <Line data={data1} options={data1.options} />
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
                      <h3 className="mb-0">Social Media Traffic</h3>
                    </div>
                  </Row>
                </CardHeader>
                <Table
                  className="align-items-center table-flush cstm-table"
                  responsive
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Network</th>
                      <th scope="col">Visitors</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Instagram</th>
                      <td>3,550</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            <Progress
                              max="100"
                              value="80"
                              barClassName="bg-gradient-primary"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Facebook</th>
                      <td>2,236</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            <Progress
                              max="100"
                              value="50"
                              barClassName="bg-gradient-primary"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Twitter</th>
                      <td>1,795</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            <Progress
                              max="100"
                              value="40"
                              className="bg-gradient-primary"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Linkedin</th>
                      <td>62</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            <Progress
                              max="100"
                              value="5"
                              barClassName="bg-gradient-primary"
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
