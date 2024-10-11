import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/shared/Footer";

function App() {
  const location = useLocation();

  // Check if the current path is "/login"
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {/* Render Header and Footer only if not on login page */}
      {!isLoginPage && <Header isAuthenticated={false} />}
      
      {/* Main content area */}
      <Outlet />

      {/* Render Footer only if not on login page */}
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
