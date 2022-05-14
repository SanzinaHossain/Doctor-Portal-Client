import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appoinment';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Review from './Pages/Review/Review';
import Footer from './Pages/Shared/Footer/Footer';
function App() {
  return (
    <div>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/appoinment" element={<Appointment></Appointment>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
