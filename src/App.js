import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { createContext, useState } from 'react';
import { vehicleType } from './FakeData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Pages/Booking/Booking';
import Destination from './Pages/Destination/Destination';
import Login from './Pages/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [riders,setRiders] = useState(vehicleType)
  const [carType,setCarType] = useState("")
  const [from,setFrom] = useState("")
  const [destination,setdestination] = useState("")
  const [loggedInUser,setLoggedInUser] = useState({})
  const [user, setUser] = useState({
    isSignedIn: false,
    name : '',
    email: '',
    password: '',
    confirmPassword: '',
    success: false,
    error: '',
    newUser: false
  })

  return (
    <UserContext.Provider value={[riders,setRiders,carType,setCarType,from,setFrom,destination,setdestination,loggedInUser,setLoggedInUser,user,setUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/booking/:type">
            <Booking/>
          </PrivateRoute>
          <PrivateRoute path="/destination">
          <Destination/>
        </PrivateRoute>
        <Route path ="/login">
          <Login/>
        </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
