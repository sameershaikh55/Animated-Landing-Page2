import React from "react";
import Img from "../assets/aboutImg.png";
import { Fade } from "react-reveal";
import LightSpeed from "react-reveal/LightSpeed";

const AboutUs = () => {
	return (
		<div id="aboutUs" className="about_container">
			<div className="rightSide_text">
				<h3>À propos de nous</h3>
				<LightSpeed>
					<h1>qui nous sommes</h1>
				</LightSpeed>
				<br />
				<h4>
					Mekanisk se distingue par son service professionnel et personnalisé en
					conception et L'impression 3D, vous permettant d'obtenir les pièces
					industrielles et fonctionnelles requises pour vos projets. Passionnés
					par les projets de développement de produits en tout genre, nous
					pouvons vous aider un accompagnement de la ph ase de conception à la
					production de votre produit.
				</h4>
				<br />
				<br />
				<h4>
					Que vous souhaitiez valider votre concept préliminaire auprès de
					clients potentiels, réduisez vos coûts ou votre time to market,
					valider l'ergonomie de votre conception, ou confirmer la faisabilité
					de votre projet, nous pouvons vous aider à profiter des solutions
					innovant disponible.
				</h4>
				<br />
				<br />
				<h4>
					Si nous n'avons pas la technologie dont vous avez besoin, vous pouvez
					profitez de nos contacts avec nos fournisseurs de confiance, tout en
					respectant vos coûts et délais!
				</h4>
				<br />
				<button className="G_btn">
					<span>Voir tout</span>
				</button>
			</div>
			<Fade right>
				<div className="about_img">
					<img src={Img} alt={Img} />
				</div>
			</Fade>
		</div>
	);
};

export default AboutUs;
