/*eslint-disable*/
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

var ps;

class Sidebar extends React.Component {
  state = {
    collapseOpen: false,
    dashCollapse: true,
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };

  toggleDashCollapse = () => {
    this.setState({
      dashCollapse: !this.state.dashCollapse,
    });
  };

  closeCollapse = () => {
    this.setState({
      collapseOpen: false,
    });
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.name === "Dashboard") {
        return (
          <NavItem key={key} style={{ borderColor: "black", borderWidth: 1 }}>
            <div className="cstm-nav-link">
              <NavLink
                to={"#"}
                tag={NavLinkRRD}
                onClick={this.toggleDashCollapse}
                activeClassName="active"
                className="font-weight-600"
              >
                <i
                  className={prop.icon}
                  style={{ fontSize: 20, marginTop: 5 }}
                />
                {prop.name}
                <i
                  className="fas fa-caret-down  text-primary"
                  style={{ position: "absolute", right: -25 }}
                ></i>
              </NavLink>
              <Collapse
                style={{
                  paddingLeft: 35,
                  paddingRight: 16,
                  paddingBottom: 10,
                  marginTop: -15,
                }}
                isOpen={this.state.dashCollapse}
              >
                <NavLink
                  to={"#"}
                  style={{ paddingBottom: 8, paddingTop: 8 }}
                  className="text-primary font-weight-700"
                >
                  {" "}
                  Page Vistors{" "}
                </NavLink>
                <NavLink
                  to={"#"}
                  style={{ paddingBottom: 8, paddingTop: 8 }}
                  className="text-muted font-weight-500"
                >
                  Post Performance
                </NavLink>
                <NavLink
                  to={"#"}
                  style={{ paddingBottom: 8, paddingTop: 8 }}
                  className="text-muted font-weight-500"
                >
                  {" "}
                  Team Overall{" "}
                </NavLink>
              </Collapse>
            </div>
          </NavItem>
        );
      }
      return (
        <NavItem key={key}>
          <div className="cstm-nav-link">
            <NavLink
              to={"#"}
              tag={NavLinkRRD}
              onClick={this.closeCollapse}
              activeClassName="active"
              style={{ color: "#9ea0a5" }}
            >
              <i className={prop.icon} style={{ fontSize: 20, marginTop: 5 }} />
              <strong style={{ color: "#3e3f42" }}> {prop.name} </strong>
            </NavLink>
          </div>
        </NavItem>
      );
    });
  };
  render() {
    const { bgColor, routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link,
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank",
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Brand */}
          {logo
            ? // <NavbarBrand className="border-bottom-1 py-4" {...navbarBrandProps}>
              //   <i className="fas fa-home"></i>
              // </NavbarBrand>
              null
            : null}
          {/* User */}
          <Nav className="align-items-center d-md-none"></Nav>
          {/* Collapse */}
          <div className="scroll-view">
            <Collapse navbar isOpen={this.state.collapseOpen}>
              {/* Collapse header */}
              <div className="navbar-collapse-header d-md-none">
                <Row>
                  {logo ? (
                    <Col className="collapse-brand" xs="6">
                      {logo.innerLink ? (
                        <Link to={logo.innerLink}>
                          <i className="fas fa-home"></i>
                        </Link>
                      ) : (
                        <a href={logo.outterLink}>
                          <i class="fas fa-home"></i>
                        </a>
                      )}
                    </Col>
                  ) : null}
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={this.toggleCollapse}
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>

              <div className="avatarContainer">
                <div className="image-wrapper">
                  <img
                    src="https://preview.dashboard-ui.com/static/media/a21.3c96e570.jpg"
                    className="avatar-img"
                  ></img>
                  <i className="fas fa-cog text-muted avatar-cog"></i>
                </div>
                <div className="avatar-Name d-flex align-items-center">
                  Martha Blair
                  <i
                    className="fas fa-circle text-success"
                    style={{ fontSize: 7, marginLeft: 8 }}
                  ></i>
                </div>
                <span className="avatar-Des">Developer</span>
              </div>

              {/* Navigation */}
              <Nav navbar>{this.createLinks(routes)}</Nav>

              <div className="nav-section">
                <span className="nav-section-title">Recently viewed</span>
                <a className="nav-link-bottom-sidenav">
                  <span className="nav-link-text">Overall Performance</span>
                  <span className="nav-link-right-el">→</span>
                </a>
                <a className="nav-link-bottom-sidenav">
                  <span className="nav-link-text">Invoice #845</span>
                  <span className="nav-link-right-el">→</span>
                </a>
                <a className="nav-link-bottom-sidenav">
                  <span className="nav-link-text">
                    Customer: Minerva Viewer
                  </span>
                  <span className="nav-link-right-el">→</span>
                </a>
              </div>
            </Collapse>
          </div>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
