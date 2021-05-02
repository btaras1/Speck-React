import {useState} from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {Main} from './lib/style/generalStyles';
import Home from './pages/Home/Home'
import Events from './pages/Events/Events'
import Event from './pages/Event/Event'
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const openHamburgerMenu = () => {
    console.log(hamburgerMenu)
    setHamburgerMenu(!hamburgerMenu);
    console.log(hamburgerMenu);
    console.log(!true);
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
      </Main>
      <Footer /> </>   
      )}


    </>
  );
}

export default App;
