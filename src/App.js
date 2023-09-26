import './App.css';
import AboutUs from './components/AboutUs';
import Error from './components/Error';
import ContactUs from './components/ContactUs';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Products from './components/Products';
import {Routes, Route} from 'react-router-dom'; 
import Wip from './components/Wip';

function App() {
  return (
    <div>
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/wip" element={<Wip/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
