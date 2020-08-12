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
import { Link } from "react-router-dom";
// reactstrap components
import {
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // Form,
  // FormGroup,
  // InputGroupAddon,
  // InputGroupText,
  // Input,
  // InputGroup,
  Navbar,
  Nav,
  Container,
  // Media,
  // Dropdown,
} from "reactstrap";
import { Dropdown, DropdownItem, DropdownMenu, Icon } from "@duik/it";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Flags from "country-flag-icons/react/3x2";

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-top   navbar-dark"
          color="white"
          expand="md"
          id="navbar-main"
        >
          <Container fluid>
            <Link
              className="h4 mb-0 text-dark text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>

            <Nav className="align-items-center d-none d-md-flex " navbar>
              <Dropdown buttonText={<strong>Click me</strong>}>
                <DropdownItem>
                <Flags.EG title="English" style={{ width: 20, height: 20 }} />
                  ENG
                </DropdownItem>
                <DropdownItem>
                  <Flags.ES title="Spanish" style={{ width: 20, height: 20 }} />
                  ESP
                </DropdownItem>
                <DropdownItem>
                  <Flags.IN title="Hindi" style={{ width: 20, height: 20 }} />
                  HIN
                </DropdownItem>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
