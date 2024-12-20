import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/shared/Footer";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function App() {
  const location = useLocation();

  // Check if the current path is "/login"
  const isLoginPage = location.pathname === "/login" || location.pathname === "/create-account" || location.pathname === "/reset-password" || location.pathname === "/verify-email";

  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Render Header and Footer only if not on login page */}
      {!isLoginPage && <Header isAuthenticated={false} isBlack={!isHomePage} />}
      
      {/* Main content area */}
      <Outlet />
      {/* Render Footer only if not on login page */}
      {!isLoginPage && <Footer isBlack={!isHomePage} />}
    </>
  );
}

export default App;
