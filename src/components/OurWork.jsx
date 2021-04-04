import React from "react";
// import work1 from "../assets/work1.svg";
// import work2 from "../assets/work2.svg";
// import work3 from "../assets/work3.svg";
// import work4 from "../assets/work4.svg";
import work5 from "../assets/images/work5.png";
import work6 from "../assets/images/work6.png";
import LightSpeed from "react-reveal/LightSpeed";
import Flip from "react-reveal/Flip";

const OurWork = () => {
	const data = [
		/* work1, work2, work3, work4, */ work5,
		work6,
		work5,
		work6,
		work5,
		work6,
	];

	return (
		<div className="ourWork_container">
			<LightSpeed>
				<h1>
					<span className="heading_underline">Notre</span> travail
				</h1>
			</LightSpeed>
			<br />
			<br />
			<h5>
				Le Monde De L'impression 3D Est Parfois Un Réseau Enchevêtré De
				Technologies, De Matériaux Et De Nouveaux Processus Et Capacités, Ce Qui
				Peut Rendre La Navigation Dans L'écosystème De L'impression 3D
				Difficile. Mekanisk Vous Accompagne Dans Vos Projets.
			</h5>
			<br />
			<br />
			<br />
			<div className="container-fluid">
				<div className="row">
					{data.map((prev) => {
						return (
							<div className="work_card col-lg-4 col-md-6 col-sm-6 col-6">
								<Flip left cascade>
									<img src={prev} alt={prev} />
								</Flip>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default OurWork;
