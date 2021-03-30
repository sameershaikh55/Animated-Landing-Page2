import React from "react";
import Img from "../assets/startup.svg";

const StartUp = () => {
	return (
		<div className="startUp_container">
			<div className="innerStartUp_container">
				<h1>
					<span className="heading_underline">PME ou </span>
					<span>&#60;</span>
					<span>&#60;</span> Start up <span>&#62;</span>
					<span>&#62;</span> ?
				</h1>
				<div className="startUp_body">
					<div>
						<h5>
							Bénéficiez d'un accompagnement personnalisé pour sélectionner le
							plus avantageux selon vos besoins!
						</h5>
						<br />
						<h5>
							Réduisez les coûts de fabrication, les délais de livraison et le
							temps d'assemblage en:
						</h5>
						<br />
						<h5>
							- Remplacement d'une pièce usinée par une pièce imprimée
							(remplacement direct de pièce)
						</h5>
						<br />
						<h5>
							- Adapter votre conception pour inclure des pièces imprimées
							(Adapt for Additive Fabrication - AfAM)
						</h5>
						<br />
						<h5>
							- Conception et optimisation de vos pièces pour la fabrication
							additive (Design for Additive Manufacturing - DfAM)
						</h5>
					</div>
					<div>
						<img src={Img} alt={Img} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default StartUp;
