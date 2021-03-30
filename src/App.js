import "./App.css";
import Header from "./components/Header.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Manufacturing from "./components/Manufacturing";
import DeliveryDetails from "./components/DeliveryDetails";
import Examples from "./components/Examples";
import StartUp from "./components/StartUp";
import Delivery from "./components/Delivery";

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <Manufacturing />
      <DeliveryDetails />
      <Examples />
      <StartUp />
      <Delivery />
    </div>
  );
}

export default App;
