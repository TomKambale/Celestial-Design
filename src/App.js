import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
// import { Switch } from '@mui/material';

function App() {
  return (
    // // <BrowserRouter>
    // <Router>
    //   <Header/>
    //   <Route path='/' component={Home}/>
    //   <Route path='/about' component={About}/>
    //   <Route path='/services' component={Services}/>
    //   <Route path='/projects' component={Projects}/>
    //   <Route path='/contact' component={Contact}/>
    //   <Route path='/faq' component={FAQ}/>
    //   {/* <Route path='' Component={About}/>
    //   <Route path='' Component={About}/> */}
    //   <Footer/>
    // </Router>
    // // </BrowserRouter>
    <BrowserRouter>
      <Header />
      
      <About />
      <Services />
      <Projects/>
      <FAQ/>
      <Contact/>
      {/* <Switch> */}
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
      </Routes>
      {/* </Switch> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
