import React from "react";
// import work1 from "../assets/work1.svg";
// import work2 from "../assets/work2.svg";
// import work3 from "../assets/work3.svg";
// import work4 from "../assets/work4.svg";
import work5 from "../assets/work5.svg";
import work6 from "../assets/work6.svg";

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
			<h1>
				<span className="heading_underline">Notre</span> travail
			</h1>
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
								<img src={prev} alt={prev} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default OurWork;
