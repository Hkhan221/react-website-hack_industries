// import logo from './logo.svg';
import React from "react"; //Added userState for search
import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from './pages/HomePage/Home.jsx'
import "./App.scss";
import Products from "./pages/Products/Products.jsx";
import Contact from "./pages/Contact/Contact.jsx";
// Search bar and Icons



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
     {/* <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
