import { useEffect, useState } from "react";
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
import OurWork from "./components/OurWork";
import WhyChooseUS from "./components/WhyChooseUS";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Application from "./components/Application";
import Material from "./components/Material";
import Sidebar from "./components/Sidebar";
import HashLoader from "react-spinners/HashLoader";

function App() {
	const [loading, setLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{loading ? (
				<div className="loader">
					<HashLoader color="#36D7B7" size={80} />
				</div>
			) : (
				<div>
					<Header ClickEvent={OnClick} />
					<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
					<AboutUs />
					<Services />
					<Manufacturing />
					<DeliveryDetails />
					<Examples />
					<Application />
					<StartUp />
					<Material />
					<OurWork />
					<Delivery />
					<WhyChooseUS />
					<Contact />
					<Footer />
				</div>
			)}
		</>
	);
}

export default App;
