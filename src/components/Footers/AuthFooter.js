/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer className="py-5">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="12">
                <div className="copyright text-center  text-muted">
                  © 2020 |
                  <a
                    className="font-weight-bold ml-1"
                    href="https://rupesh.cf/"
                    target="_blank"
                  >
                    Rupesh Chaudhari
                  </a>
                </div>
              </Col>
              
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Login;
