import {useState} from 'react';
import { Route } from 'react-router-dom';
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

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const openHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  }
  return (
    <>
    {hamburgerMenu ? (   
      <>
    <Header setHamburgerMenu={openHamburgerMenu}/>
    <Main><HamburgerMenu setHamburgerMenu={openHamburgerMenu}/></Main>
      
      </>   ) 
      : (    
        <>  
        <Header setHamburgerMenu={openHamburgerMenu}/>
      <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/events" component={Events}/>
        <Route path="/event/:id" component={Event}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register}/>
        <Route path="/admin" component={Admin}/>
      </Main>
      <Footer /> </>   
      )}


    </>
  );
}

export default App;
