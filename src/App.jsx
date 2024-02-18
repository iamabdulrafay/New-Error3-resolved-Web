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

function App() {
  const [methodToScrollIntoReservationSectView, setMethodToScrollIntoReservationSectView] = useState(null);
  const appTitle = `PLATO`;
  window.scrollTo(
    {
      top: "0",
      behaviour: "smooth"
    }
  )
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage setScrollMethod={setMethodToScrollIntoReservationSectView} />} />
          <Route path="/booking-res" element={<BookingResponse appTitle={appTitle} scrollMethod={methodToScrollIntoReservationSectView} />} />
        </Routes>
      </BrowserRouter>
      {/* */}
    </>
  )
}

export default App