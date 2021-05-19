import {useState, useEffect} from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {Main} from './lib/style/generalStyles';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Events from './pages/Events/Events'
import Event from './pages/Event/Event'
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Admin from './pages/Admin/Admin';
import {ProtectedRoute} from './components/ProtectedRoute/ProtectedRoute'

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const openHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  }
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('authToken') ? true : false);
    console.log("SETTERLOG");
    console.log(isLoggedIn);
    setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
    console.log("SETTERADMIN");
    console.log(isAdmin);
  }, [])

  function userLogin(token, admin){
    localStorage.setItem('authToken', token);
    localStorage.setItem('isAdmin', admin);
    setIsLoggedIn(true);
    setIsAdmin(admin);
    console.log("jesam");
    console.log(!isLoggedIn);
  } 

  function userLogout(){
    localStorage.removeItem('authToken');
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
    setIsAdmin(false);

  }
  return (
    <>
    {hamburgerMenu ? (   
      <>
    <Header setHamburgerMenu={openHamburgerMenu} isAdmin={isAdmin} isLoggedIn={isLoggedIn} userLogout={userLogout} />
    <Main><HamburgerMenu setHamburgerMenu={openHamburgerMenu}/></Main>
      
      </>   ) 
      : (    
        <>  
        <Header setHamburgerMenu={openHamburgerMenu}/>
      <Main>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/events" component={Events}/>
        <Route path="/event/:id" component={Event}/>
        <ProtectedRoute user='isLoggedIn' isLoggedIn={isLoggedIn}  path="/login"  userLogin={userLogin} component={Login} />
        <ProtectedRoute user='isLoggedIn' isLoggedIn={isLoggedIn} userLogin={userLogin} path="/register"  component={Register}/>
        <ProtectedRoute user='isAdmin' isAdmin={isAdmin} path="/admin" component={Admin}/>
        </Switch>
      </Main>
      <Footer /> </>   
      )}


    </>
  );
}

export default App;
