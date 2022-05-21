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
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReview from './Pages/DashBoard/MyReview';
function App() {
  return (
    <div>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/appoinment" element={
        <RequireAuth>
             <Appointment></Appointment>
        </RequireAuth>
        }></Route>
         <Route path="/dashboard" element={
        <RequireAuth>
             <DashBoard/>
        </RequireAuth>
        }>
           <Route index element={<MyAppointment></MyAppointment>}></Route>
           <Route path="myreview" element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
