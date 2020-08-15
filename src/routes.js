import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "fas fa-th-large text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "far fa-calendar-minus",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/inbox",
    name: "Inbox",
    icon: "fas fa-inbox",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/invoicing",
    name: "Invoicing",
    icon: "fas fa-money-check-alt",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/lab",
    name: "Lab / Experimental",
    icon: "fas fa-flask",
    component: Tables,
    layout: "/admin",
  },
];
export default routes;
