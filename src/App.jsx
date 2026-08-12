import "./App.css";
import { registerUser } from "./firebase/auth.js";
import {  Router, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";

function App() {


  return (
    <>
     <Header/>
    <Routes>
     
        <Route path="/" element={<HomePage/> } />
      </Routes>
   </>
  );
}

export default App;
