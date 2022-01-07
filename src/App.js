import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbars from './components/Navbar/Navbar';
import Addservices from './Pages/Add-services/Addservices';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registar from './Pages/Registar/Registar';
import Notfound from './Pages/Notfound/Notfound'
import Booking from './Pages/Booking/Booking';
import Packages from './Pages/Packages/Packages';
import ManageOrders from './Pages/MangeOrders/ManageOrders';
import AuthProvider from './components/context/authProvider';


function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
       <Navbars/>
       <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/addservices">
            <Addservices></Addservices>
          </Route>
          <Route exact path="/packages">
             <Packages/>
          </Route>
          <Route exact path="/booking/:id">
             <Booking/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/manageorders">
             <ManageOrders/>
          </Route>
          <Route path="/login">
             <Login/>
          </Route>
          <Route path="/registar">
            <Registar/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
       </Switch>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
