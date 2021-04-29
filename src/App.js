import { Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './pages/Home/Home'
import Events from './pages/Events/Events'
import Event from './pages/Event/Event'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/events" component={Events}/>
        <Route path="/event/:id" component={Event}/>
      </Main>
      <Footer />
    </>
  );
}

export default App;
