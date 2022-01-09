import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route,Switch, Routes } from 'react-router-dom' 
 //error:Attempted import error: 'Switch' is not exported from 'react-router-dom'-- tbadel Switch b Routes
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />  
          <Route path="/menu"  element={<Menu />} /> 
          <Route path="/about"  element={<About />} /> 
          <Route path="/contact"  element={<Contact />} />
          {/* to replace component with element when to use Routes */}
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
