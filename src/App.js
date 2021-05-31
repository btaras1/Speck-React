import {useContext, useEffect, useState} from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {Main} from './lib/style/generalStyles';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Admin from './pages/Admin/Admin';
import {ProtectedRoute} from './components/ProtectedRoute/ProtectedRoute';
import { AuthContext } from './context/AuthContext';

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const { setIsLoggedIn, setIsAdmin, isAdmin, isLoggedIn, userLogout, userLogin } = useContext(AuthContext);
  const openHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  }

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('authToken') ? true : false);
    setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
  }, [])



  return (
    <>
    {hamburgerMenu ?   
      (<>
        <Header 
          setHamburgerMenu={openHamburgerMenu} 
          isAdmin={isAdmin} 
          isLoggedIn={isLoggedIn} 
          userLogout={userLogout} 
        />
        <Main><HamburgerMenu setHamburgerMenu={openHamburgerMenu}/></Main>
      </>) 
      : (    
        <>  
          <Header 
            setHamburgerMenu={openHamburgerMenu} 
            isAdmin={isAdmin} 
            isLoggedIn={isLoggedIn} 
            userLogout={userLogout} 
          />
          <Main>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/events" component={Events}/>
            <Route path="/event/:id" component={Event}/>
            <ProtectedRoute user='isLoggedIn' path="/login" component={Login} />
            <ProtectedRoute user='isLoggedIn' path="/register"  component={Register}/>
            <ProtectedRoute user='isAdmin' path="/admin" component={Admin}/>
            </Switch>
          </Main>
          <Footer /> 
        </>   
      )}


    </>
  );
}

export default App;
