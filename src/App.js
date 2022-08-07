// import logo from './logo.svg';
import './App.css';
import Navbar from './components/pages/navbar';
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Login from './components/pages/login';
import Home from './components/pages/Home';
import Add_your_clothes from './components/pages/Add_your_clothes';
import Not_log from './components/pages/login_first';
import Get_clothes from './components/pages/get_clothes';
import About_us from './components/pages/about us';
import MyDonations from './components/pages/My Donations';


function App() {

  return (
    
    <div className="App">

      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/get-clothes'>
            <Get_clothes/>
          </Route>
          <Route exact path='/about-us'>
            <About_us/>
          </Route>
          <Route exact path='/my-donation'>
            <MyDonations/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/donate-your-clothes'>
            <Add_your_clothes/>
          </Route>
          <Route exact path='/login-first'>
            <Not_log/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
