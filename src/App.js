import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Cmponent/Header/Header';
import Home from './Cmponent/Home/Home';
import About from './Cmponent/About/About';
import Sports from './Cmponent/Sports/Sports';
import NotFound from './Cmponent/NotFound/NotFound';
import Footer from './Cmponent/Footer/Footer';
import UserReviews from './Cmponent/UserReviews/UserReviews';
import SportDetails from './Cmponent/SportDetails/SportDetails';

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
          <Route exact path="/Sports">
            <Sports></Sports>
          </Route>
          <Route exact path="/Sports/:id">
            <SportDetails></SportDetails>
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
