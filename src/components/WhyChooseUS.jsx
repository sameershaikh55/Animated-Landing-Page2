import React from "react";
import choose1 from "../assets/choose1.svg";
import choose2 from "../assets/choose2.svg";
import choose3 from "../assets/choose3.svg";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

const WhyChooseUS = () => {
	return (
		<div className="WCU_container">
			<LightSpeed>
				<h1>
					<span className="heading_underline">Pour</span> quoi nous choisir
				</h1>
			</LightSpeed>
			<br />
			<br />
			<br />
			<div className="container-fluid">
				<div className="row">
					<div className="choose_card col-lg-4 col-md-6 col-sm-12 mb-5">
						<Fade right cascade>
							<img src={choose1} alt={choose1} />
							<br />
							<br />
							<h3>Super professionnel</h3>
							<h5>Nous fournissons nos meilleurs efforts au client attente.</h5>
						</Fade>
					</div>
					<div className="choose_card col-lg-4 col-md-6 col-sm-12  mb-5">
						<Fade big>
							<img src={choose2} alt={choose1} />
							<br />
							<br />
							<h3>Services exceptionnels</h3>
							<h5>
								Le service exceptionnel comprend Sculpteo, Protolabs.Treatstock,
								3D Systems On Demand Manufacturing, Stratasys Direct. 3DPRINTUK.
							</h5>
						</Fade>
					</div>
					<div className="choose_card col-lg-4 col-md-6 col-sm-12  mb-5">
						<Fade left cascade>
							<img src={choose3} alt={choose1} />
							<br />
							<br />
							<h3>Super professionnel</h3>
							<h5>
								Les économies consistent à réduire les dépenses, telles que les
								coûts récurrents. nous économisons votre temps et votre argent.
							</h5>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUS;
