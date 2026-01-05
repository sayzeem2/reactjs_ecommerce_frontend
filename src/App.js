import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignInPage from './zee/SignInPage';
import SignUpPage from './zee/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './zee/ResetPasswordPage';
import HomePage from './zee/HomePage';
import CartPage from './zee/CartPage';
import AboutUs from './zee/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/about-us" element={<AboutUs />} />


      </Routes>
    </Router>
  );
}

export default App;
