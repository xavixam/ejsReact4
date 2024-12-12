import { useState } from 'react'
import './App.css'
import Reserve from "./components/Reserve/Reserve";
import Home from "./components/Home/Home";
import Otra from "./components/Otra/Otra";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/sorpresa" element={<Otra />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
