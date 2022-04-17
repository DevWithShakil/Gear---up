import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home/Home';
import Services from './components/Pages/Home/Services';
import Footer from './components/Pages/Shared/Footer/Footer';
import Header from './components/Pages/Shared/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
