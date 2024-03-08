import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../screens/auth/login'
import  Register  from "../screens/auth/register/Register";
import Home from "../screens/home/page";
import GoTop from "../components/GoTop";
import Testimonials from "../screens/testimonials";
import ContactUs from "../screens/contactUs";
import Set_up_your_account from "../screens/auth/register/Set_up_your_account";
import Book_your_appointment from "../screens/book_your_appointment/Book_your_appointment";
import Assessment from "../screens/assessment/Assessment";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact_us" element={<ContactUs/>} />
          <Route path="/set_up_your_account" element={<Set_up_your_account/>} />
          <Route path="/book_your_appointment" element={<Book_your_appointment/>} />
          <Route path="/assessment" element={<Assessment/>} />
      </Routes>
      <GoTop/>
    </BrowserRouter>
  );
};
export default Routing;
