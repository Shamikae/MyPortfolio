import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
    <TopNav/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </Router>
  );
}

export default App;
