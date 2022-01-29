import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CoursePage from "./components/CoursePage/CoursePage";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import AuthProvider from "./contexts/AuthProvider";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Cart from "./components/Cart/Cart";
import Dashboard from "./components/AdminPanel/Dashboard/Dashboard";
import SyncLoader from "react-spinners/SyncLoader";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useEffect, useState } from "react";

function App() {
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);

   return (
      <AuthProvider>
         {loading ? (
            <div className="home-pre-loader">
               <div className="d-flex justify-content-center align-items-center">
                  <SyncLoader
                     className="syncloader"
                     color={"#2f2d52"}
                     loading={loading}
                     size={20}
                  />
               </div>
            </div>
         ) : (
            <>
               <Router>
                  <Header />
                  <Switch>
                     <Route exact path="/">
                        <Main />
                     </Route>
                     <Route path="/home">
                        <Main />
                     </Route>
                     <Route path="/about">
                        <About />
                     </Route>
                     <Route path="/courses">
                        <CoursePage />
                     </Route>
                     <Route path="/course/:courseId">
                        <CourseDetails />
                     </Route>
                     <Route path="/contact">
                        <Contact />
                     </Route>
                     <Route path="/login">
                        <Login />
                     </Route>
                     <Route path="/register">
                        <Register />
                     </Route>
                     <PrivateRoute path="/cart">
                        <Cart />
                     </PrivateRoute>
                     <PrivateRoute path="/admin">
                        <Dashboard />
                     </PrivateRoute>
                     <Route path="*">
                        <NotFound />
                     </Route>
                  </Switch>
                  <Footer />
               </Router>
            </>
         )}
      </AuthProvider>
   );
}

export default App;

// code link: https://github.com/ProgrammingHeroWC4/review-website-googlermridul
// live link: https://skolaa.netlify.app/
