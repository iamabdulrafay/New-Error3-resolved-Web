// Import Bootstrap Css 
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/commons/Header';
import BookingResponse from './screens/BookingResponse';
import LandingPage from './screens/LandingPage';
import Footer from './components/commons/Footer';
import Blogs from './screens/Blogs';
import RecipeDetails from './screens/RecipeDetails';

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
          <Route
            path="/recipe/:id"
            element={<RecipeDetails />}
          />
        </Routes>
        <Footer appName={"Plato"} />
      </BrowserRouter>
    </>
  )
}

export default App