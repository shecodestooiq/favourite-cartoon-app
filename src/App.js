import './App.css';
import NavigationComp from './components/navigationComp';
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';




function App() {

  return (
  <div className='container'>
    <NavigationComp />
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    </Routes>

    <Footer />
    </div>);
}

export default App;
