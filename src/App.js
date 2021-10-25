import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About/About';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CoursePage from './components/CoursePage/CoursePage';

function App() {
  return (
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
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;


// code link: https://github.com/ProgrammingHeroWC4/review-website-googlermridul
// live link: https://skolaa.netlify.app/