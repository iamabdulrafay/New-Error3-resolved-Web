// Import Bootstrap Css 
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import BookingResponse from './screens/BookingResponse';
import LandingPage from './screens/LandingPage';
import Footer from './components/Footer';

function App() {
  const appTitle = `PLATO`;
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={
            <LandingPage />
          } />
          if (localStorage.getItem("Booking Credentials")) {
            <Route path="/booking-res" element={
              <BookingResponse appTitle={appTitle} />
            } />
          }
        </Routes>

        <Footer appName={"Plato"} />
      </BrowserRouter>
    </>
  )
}

export default App