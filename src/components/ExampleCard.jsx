import React from "react";
import Fade from "react-reveal/Fade";

const ExampleCard = ({ title, img }) => {
	return (
		<Fade right cascade>
			<div className="example_card col-lg-4 col-md-6 col-sm-6 col-12">
				<img src={img} alt={img} />
				<h2> {title} </h2>
			</div>
		</Fade>
	);
};

export default ExampleCard;
