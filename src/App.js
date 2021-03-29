import "./App.css";
import Header from "./components/Header.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Manufacturing from "./components/Manufacturing";

function App() {
	return (
		<div>
			<Header />
			<AboutUs />
			<Services />
			<Manufacturing />
		</div>
	);
}

export default App;
