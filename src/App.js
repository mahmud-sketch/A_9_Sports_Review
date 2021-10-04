import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Cmponent/Header/Header';
import Home from './Cmponent/Home/Home';
import About from './Cmponent/About/About';
import Courses from './Cmponent/Courses/Courses';
import NotFound from './Cmponent/NotFound/NotFound';
import Footer from './Cmponent/Footer/Footer';
import UserReviews from './Cmponent/UserReviews/UserReviews';
import CourseDetails from './Cmponent/Courses/Course/CourseDetails';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/course/:CourseId">
            <CourseDetails></CourseDetails>
          </Route>
          <Route path="/userreviews">
            <UserReviews></UserReviews>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
