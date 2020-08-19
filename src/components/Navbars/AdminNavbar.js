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
  Col,
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
          className="navbar fixed-top navbar-dark"
          color="white"
          expand="md"
          id="navbar-main"
        >
          <Container className="pl-0">
            <div className="home-icon">
              <i className="fas fa-home"></i>
            </div>
            <Link
              className="h2 mb-0 text-dark  d-none d-lg-inline-block dashlink"
              to="/"
            >
              {this.props.brandText}
            </Link>

            <Nav
              className="align-items-center d-none d-md-flex float-right"
              navbar
              style={{ marginRight: 25 }}
            >
              {/* <select class="arrows">
                <option  data >Option1</option>
                <option value="ENG">
                  <img
                    alt="ENG"
                    src="https://image.flaticon.com/icons/svg/555/555462.svg"
                    style={{ height: 20, width: 20 }}
                  />
                  ENG
                </option>
              </select> */}

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
