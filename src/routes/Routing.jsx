import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register/Register";
import Home from "../screens/home/page";
import GoTop from "../components/GoTop";
import Testimonials from "../screens/testimonials";
import ContactUs from "../screens/contactUs";
import Set_up_your_account from "../screens/auth/register/Set_up_your_account";
import Book_your_appointment from "../screens/book_your_appointment/Book_your_appointment";
import Assessment from "../screens/assessment/Assessment";
import AboutUs from "../screens/aboutUs";
import New_In_sweden from "../screens/newInSweden";
import Services from "../screens/services";
import FAQs from "../screens/FAQs";
import Blogs from "../screens/blogs";
import BlogDetails from "../screens/blogDetails";
import Assessment_register from "../screens/assessment_register";
import Gallery from "../screens/gallery";
import Terms_conditions from "../screens/terms_conditions";
import PrivacyPolicy from "../screens/privacyPolicy";
import Rent_out_your_housing from "../screens/rent_out_your_housing";
import ServiceDetails from "../screens/ServiceDetails";
import Looking_for_housing from "../screens/Looking_for_housing";
import { useEffect } from "react";
const Routing = () => {
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/new_in_sweden" element={<New_In_sweden />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/set_up_your_account" element={<Set_up_your_account />} />
        <Route
          path="/book_your_appointment"
          element={<Book_your_appointment />}
        />
        <Route
          path="/rent_out_your_housing"
          element={<Rent_out_your_housing />}
        />
        <Route path="/looking_for_housing" element={<Looking_for_housing />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/assessment_register" element={<Assessment_register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service_details/:id" element={<ServiceDetails />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog_details" element={<BlogDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms_conditions" element={<Terms_conditions />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      </Routes>
      <GoTop />
    </BrowserRouter>
  );
};
export default Routing;
