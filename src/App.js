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

function App() {
   return (
      <AuthProvider>
         <>
            <Router>
               <Header></Header>
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
                  <Route path="/cart">
                     <Cart />
                  </Route>
                  <Route path="/admin">
                     <Dashboard />
                  </Route>
                  <Route path="*">
                     <NotFound />
                  </Route>
               </Switch>
               <Footer></Footer>
            </Router>
         </>
      </AuthProvider>
   );
}

export default App;

// code link: https://github.com/ProgrammingHeroWC4/review-website-googlermridul
// live link: https://skolaa.netlify.app/
