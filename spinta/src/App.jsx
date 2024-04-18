import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Apranga';
import NavBar from './components/NavBar';

const App = () => {
 return (
    <>
      <NavBar / >
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </>
 );
};

export default App;