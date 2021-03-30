import React from "react";
import Logo2 from "../assets/logo2.svg";
import Location from "../assets/location.svg";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";
import Time from "../assets/time.svg";

const Contact = () => {
	return (
		<div className="contact_container">
			<div className="innerContact_container">
				<h1>
					<span className="heading_underline">CON</span>TACT
				</h1>
				<br />
				<h5>
					Aucun projet n'est trop petit ! Contactez nous pour ajouter de la
					valeur à votre projet et matérialiser vos idées.
				</h5>
				<br />
				<br />
				<br />
				<div className="container-fluid">
					<div className="row">
						<div className="left_side col-lg-5 col-md-6 col-sm-12 mb-5">
							<h3>Contactez-nous</h3>
							<br />
							<form>
								<input type="text" placeholder="Nom" />
								<br />
								<br />
								<input type="text" placeholder="Courriel" />
								<br />
								<br />
								<textarea rows="4" placeholder="Un message" />
								<br />
								<br />
								<button>Envoyer</button>
							</form>
						</div>
						<div className="offset-md-1 col-lg-6 col-md-6 col-sm-12">
							<div className="right_side">
								<img className="logo2" src={Logo2} alt={Logo2} />
								<br />
								<br />
								<h5>
									Pour obtenir une soumission dans les 24 heures, envoyez-nous
									votre modèle 3D (format STL) par courriel. Sinon, un sketch à
									la main ou des photos peuvent très bien initier la discussion.
								</h5>
								<br />
								<br />
								<div className="innerRight_side">
									<div>
										<span>
											<img src={Location} alt={Location} />
										</span>
										<span>
											Basé à Laval (Québec, Canada), nous livrons partout au
											Canada, aux États-Unis et en Europe !
										</span>
									</div>
									<br />
									<div>
										<span>
											<img src={Email} alt={Email} />
										</span>
										<span>info@mekanisk3d.com</span>
									</div>
									<br />
									<div>
										<span>
											<img src={Phone} alt={Phone} />
										</span>
										<span>438.881.0996</span>
									</div>
									<br />
									<div>
										<span>
											<img src={Time} alt={Time} />
										</span>
										<span>lundi au vendredi de 8h00 à 17h00 (EST)</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
