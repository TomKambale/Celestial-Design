import { Route, Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Header/>
      <Route path='/' Component={Home}/>
      <Route path='' Component={About}/>
      <Route path='' Component={Services}/>
      <Route path='' Component={Projects}/>
      <Route path='' Component={Contact}/>
      <Route path='' Component={FAQ}/>
      {/* <Route path='' Component={About}/>
      <Route path='' Component={About}/> */}






      <Footer/>
    </Router>
  );
}

export default App;
