import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
