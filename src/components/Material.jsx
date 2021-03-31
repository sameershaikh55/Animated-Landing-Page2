import React from "react";
import material1 from "../assets/material1.svg";
import material2 from "../assets/material2.svg";
import material3 from "../assets/material3.svg";
import material4 from "../assets/material4.svg";
import material5 from "../assets/material5.svg";

import { GoPrimitiveDot } from "react-icons/go";

const Material = () => {
	return (
		<div id="material" className="material_container">
			<h1>
				<span className="heading_underline">Matér</span>iaux
			</h1>
			<br />
			<h5>
				Large gamme de matériaux plastiques disponibles, mais aucun matériaux «
				bas de gamme ». Le marché actuel est inondé de toutes sortes
				d'imprimantes et de matériaux n'offrant pas le même niveau de qualité et
				de rigidité des pieces imprimées. Mekanisk 3D a pris la décision
				d'utiliser, par défaut, les filaments Ultimaker et Markforged (pas de
				fin ou filament à prix réduit, sauf si vous le demandez). Ainsi, vous
				pouvez faire confiance à la qualité de notre produit que nous vous
				livrerons et ce, dès le devis.
			</h5>
			<br />
			<br />
			<br />
			<br />
			<div className="container-fluid">
				<div className="row">
					{/* SECTION 1 START */}
					<div className="materialCard col-lg-6 col-md-6 col-sm-6 mb-3 mb-sm-0 align-self-center">
						<h3>
							<span className="materialCard_heading">Pr</span>oduits Marforgés
						</h3>
						<br />
						<h5 className="text-left pl-2">
							Onyx (nylon renforcé de fibres de carbone), avec ou sans renfort
							de fibres composites (fibre de verre de carbone, carbone, kevlar)
						</h5>
					</div>
					<div className="materialCard materialCardImg col-lg-6 col-md-6 col-sm-6 mb-5 mb-sm-0">
						<img src={material1} alt={material1} />
					</div>
					{/* SECTION 1 END */}

					{/* SECTION 2 START */}
					<div className="materialCard col-lg-6 col-md-6 col-sm-6 mb-5 mb-sm-0">
						<img src={material2} alt={material2} />
					</div>
					<div className="materialCard col-lg-6 col-md-6 col-sm-6 mb-5 mb-sm-0 align-self-center">
						<div className="materialCard_text">
							<h3>
								<span className="materialCard_heading">Fil</span>aments (FFF /
								FDM) « standards »
							</h3>
							<br />
							<h5 className="text-left pl-2">
								<GoPrimitiveDot className="materialDot" /> PLA, ABS, PETG, PC,
								nylon, etc. <br />
								<GoPrimitiveDot className="materialDot" /> Possibilité
								d'impression en 2 couleurs <br />
								<GoPrimitiveDot className="materialDot" /> Autres filaments sur
								demande
							</h5>
						</div>
					</div>
					{/* SECTION 2 END */}

					{/* SECTION 3 START */}
					<div className="materialCard col-lg-6 col-md-6 col-sm-6 align-self-center">
						<h3>
							<span className="materialCard_heading">Fil</span>aments (FFF /
							FDM) « spécialisés »
						</h3>
						<br />
						<h5 className="text-left pl-2">
							<GoPrimitiveDot className="materialDot" /> ESD (décharge
							électrostatique) <br />
							<GoPrimitiveDot className="materialDot" /> FR (ignifuge) <br />
							<GoPrimitiveDot className="materialDot" /> Autres sur demande
						</h5>
					</div>
					<div className="materialCard materialCardImg col-lg-6 col-md-6 col-sm-6 mb-5 mb-sm-0">
						<img src={material3} alt={material3} />
					</div>
					{/* SECTION 3 END */}

					{/* SECTION 4 START */}
					<div className="materialCard col-lg-6 col-md-6 col-sm-6 mb-5 mb-sm-0">
						<img src={material4} alt={material4} />
					</div>
					<div className="materialCard col-lg-6 col-md-6 col-sm-6 mb-5 mb-sm-0 align-self-center">
						<div className="materialCard_text">
							<h3>
								<span className="materialCard_heading">Ré</span>sines (SLA)
							</h3>
							<br />
							<h5 className="text-left pl-2">
								<GoPrimitiveDot className="materialDot" /> Standard (noir,
								clair, ...) <br />
								&nbsp;&nbsp;&nbsp; - Résistant <br />
								&nbsp;&nbsp;&nbsp; - Flexible <br />
								<GoPrimitiveDot className="materialDot" /> Autres sur demande
							</h5>
						</div>
					</div>
					{/* SECTION 4 END */}

					{/* SECTION 5 START */}
					<div className="materialCard col-lg-6 col-md-6 col-sm-6 mb-3 mb-sm-0 align-self-center">
						<h3>
							<span className="materialCard_heading">Au</span>tres technologies
						</h3>
						<br />
						<h5 className="text-left pl-2">
							<GoPrimitiveDot className="materialDot" /> Disponibles via notre
							réseau de fournisseurs. Contactez nous pour advantage
							d'information.
						</h5>
						<br />
						<button className="G_btn">Contactez-nous</button>
					</div>
					<div className="materialCard materialCardImg col-lg-6 col-md-6 col-sm-6">
						<img src={material5} alt={material5} />
					</div>
					{/* SECTION 5 END */}
				</div>
			</div>
		</div>
	);
};

export default Material;
