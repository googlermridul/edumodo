import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import NotFound from "../../NotFound/NotFound";
import TopHeader from "../TopHeader/TopHeader";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.scss";
import AddCourse from "../AddCourse/AddCourse";
import ManageCourses from "../ManageCourses/ManageCourses";
import ManageOrders from "../ManageOrders/ManageOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Contacts from "../Contacts/Contacts";
import ManageUsers from "../ManageUsers/ManageUsers";

const Dashboard = () => {
   const { path, url } = useRouteMatch();
   const { logOut } = useAuth();

   return (
      <>
         <TopHeader />

         <div className="container-fluid">
            <div className="row">
               <nav
                  id="sidebarMenu"
                  className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
               >
                  <div className="position-sticky">
                     <ul className="nav flex-column">
                        <li className="nav-item">
                           <Link className="link" to={`${url}/addCourse`}>
                              <FontAwesomeIcon
                                 className="fa-icon"
                                 icon={faThLarge}
                              />{" "}
                              Add Course
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to={`${url}/manageCourses`}>
                              <FontAwesomeIcon
                                 className="fa-icon"
                                 icon={faThLarge}
                              />{" "}
                              Manage Courses
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to={`${url}/manageOrders`}>
                              <FontAwesomeIcon
                                 className="fa-icon"
                                 icon={faThLarge}
                              />{" "}
                              Manage Orders
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to={`${url}/contacts`}>
                              <FontAwesomeIcon
                                 className="fa-icon"
                                 icon={faThLarge}
                              />{" "}
                              Manage Contacts
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to={`${url}/manageUsers`}>
                              <FontAwesomeIcon
                                 className="fa-icon"
                                 icon={faThLarge}
                              />{" "}
                              Manage Users
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to={`${url}/makeAdmin`}>
                              <FontAwesomeIcon
                                 className="fa-icon"
                                 icon={faThLarge}
                              />{" "}
                              Make Admin
                           </Link>
                        </li>
                        <li className="nav-item">
                           <span
                              className="link"
                              style={{ cursor: "pointer" }}
                              onClick={logOut}
                           >
                              <FontAwesomeIcon
                                 className="fa-icon"
                                 icon={faSignOutAlt}
                              />{" "}
                              Logout
                           </span>
                        </li>
                     </ul>
                  </div>
               </nav>

               <main className="col-md-9 ms-sm-auto col-lg-10 p-0 main">
                  <Switch>
                     <Route exact path={path}>
                        <h1>Dashboard</h1>
                     </Route>
                     <Route path={`${path}/addCourse`}>
                        <AddCourse />
                     </Route>
                     <Route path={`${path}/manageCourses`}>
                        <ManageCourses />
                     </Route>
                     <Route path={`${path}/manageOrders`}>
                        <ManageOrders />
                     </Route>
                     <Route path={`${path}/contacts`}>
                        <Contacts />
                     </Route>
                     <Route path={`${path}/manageUsers`}>
                        <ManageUsers />
                     </Route>
                     <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                     </Route>
                     <Route path="*">
                        <NotFound />
                     </Route>
                  </Switch>
               </main>
            </div>
         </div>
      </>
   );
};

export default Dashboard;
