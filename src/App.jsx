import "./App.css";
import { registerUser } from "./firebase/auth.js";
import {  Router, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import TeachersPage from "./pages/TeachersPage/TeachersPage.jsx";

function App() {


  return (
    <>
     <Header/>
    <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage/>}/>
      </Routes>
   </>
  );
}

export default App;
