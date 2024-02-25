// Import Bootstrap Css 
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import BookingResponse from './screens/BookingResponse';
import LandingPage from './screens/LandingPage';
import Footer from './components/Footer';
import Blogs from './screens/Blogs';

function App() {
  const appTitle = `PLATO`;

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          if (localStorage.getItem("Booking Credentials")) {
            <Route
              path="/booking-res"
              element={
                <BookingResponse appTitle={appTitle} />
              }
            />
          }
          <Route
            path="/blogs"
            element={<Blogs />}
          />
        </Routes>
        <Footer appName={"Plato"} />
      </BrowserRouter>
    </>
  )
}

export default App