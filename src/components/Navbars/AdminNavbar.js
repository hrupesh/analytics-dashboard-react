import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  // FormGroup,
  Input,
  Label,
  Navbar,
  Nav,
  Container,
  NavbarBrand,
} from "reactstrap";
import "../../assets/css/argon-dashboard-react.css";
import ReactFlagsSelect from "react-flags-select";

import "react-flags-select/css/react-flags-select.css";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "ENGLISH",
      FLAG_CODE: "GB",
    };
  }

  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-top navbar-dark"
          color="white"
          expand="md"
          id="navbar-main"
        >
          <Container>
            <Link
              className="h4 mb-0 text-dark  d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>

            <Nav
              className="align-items-center d-none d-md-flex float-right"
              navbar
            >
              <select class="arrows">
                <option value="Vancouver Island University">
                  Vancouver Island University
                </option>
                <option value="Western University">Western University</option>
                <option value="Wilfrid Laurier University">
                  Wilfrid Laurier University
                </option>
                <option value="York University">York University</option>
              </select>

              <ReactFlagsSelect
                countries={["GB", "IN", "ES"]}
                customLabels={{ GB: "ENG", IN: "HIN", ES: "ESP" }}
                defaultCountry="GB"
              />
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
