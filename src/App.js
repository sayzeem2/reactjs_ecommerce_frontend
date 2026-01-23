import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import TermsConditions from './pages/TermsConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import ProductsListPage from './pages/ProductsListPage';
import ContactDetailsPage from './pages/ContactDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/products-list" element={<ProductsListPage />} />
        <Route path="/contact-details" element={<ContactDetailsPage />} />


      </Routes>
    </Router>
  );
}

export default App;
