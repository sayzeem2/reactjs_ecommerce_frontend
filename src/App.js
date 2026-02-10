// import logo from './logo.svg';
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
import FAQPage from './pages/FAQPage'
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import Error404Page from './pages/Error404Page';
import EmptyCart from './pages/EmptyCart';
import CheckOutPage from './pages/CheckOutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/products-list" element={<ProductsListPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/contact-details" element={<ContactDetailsPage />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/404-error" element={<Error404Page />} />
        <Route path="/empty-cart" element={<EmptyCart />} />
        <Route path="/checkout-page" element={<CheckOutPage />} />


      </Routes>
    </Router>
  );
}

export default App;
