import React from "react";
import Fade from "react-reveal/Fade";

const DeliveryDetails = () => {
	return (
		<div className="deliveryDetails_container">
			<Fade left cascade>
				<div className="left_side">
					<h1>FLEXIBLE AND ON-DEMAND DELIVERIES !</h1>
					<br />
					<h5>
						Basé à Laval (Québec, Canada), nous livrons partout au Canada, aux
						États-Unis et en Europe !
					</h5>
					<br />
					<h5>
						Livraisons multiples possible, sans quantité minimum de pièces
						requise, ce qui vous permet d’éviter d’entreposer les pièces
						longtemps à l’avance et de mieux gérer votre budget !!!
					</h5>
					<br />
					<h5>Délais de fabrication rapide !</h5>
					<br />
					<h5>
						Selon la géométrie et la quantité de pièces commandées, les délais
						de fabrication peuvent être très rapide (la majorité du temps dans
						les 24 à 48 heures).
					</h5>
					<br />
				</div>
			</Fade>
			<Fade right cascade>
				<div className="right_side">
					<h1>PAIEMENTS SÉCURISÉS ET RAPIDE VIA LES SERVICES PAYPAL</h1>
					<br />
					<h5>
						Payez par cartes de crédit, débit ou avec votre compte Paypal.
					</h5>
				</div>
			</Fade>
		</div>
	);
};

export default DeliveryDetails;
