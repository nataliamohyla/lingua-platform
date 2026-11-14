import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import TeachersPage from "./pages/TeachersPage/TeachersPage.jsx";
import UserPage from "./pages/UserPage/UserPage.jsx";
import { useState } from "react";
import AuthModal from "./components/AuthModal/AuthModal.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm/RegisterForm.jsx";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const openLoginModal = () => {
    setIsLoginOpen(true);
  };
  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  return (
    <>
    
      <Header
         openLoginModal={openLoginModal}
        openRegisterModal={openRegisterModal}
      />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage openLoginModal={openLoginModal} />} />
        <Route path="/user" element={<UserPage/>} />
      </Routes>
      {isLoginOpen && (
        <AuthModal onClose={() => setIsLoginOpen(false)}>
          <LoginForm onClose={() => setIsLoginOpen(false)} />
        </AuthModal>
      )}

      {isRegisterOpen && (
        <AuthModal onClose={() => setIsRegisterOpen(false)}>
          <RegisterForm onClose={() => setIsRegisterOpen(false)} />
        </AuthModal>
      )}
   </>
  );
}

export default App;
