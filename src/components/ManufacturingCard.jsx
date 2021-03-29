import React from "react";
import Arrow from "../assets/arrow.svg";

const ManufacturingCard = ({ title, img, description }) => {
	return (
		<div className="manufacturingCard_container">
			<div className="img_container">
				<img src={img} alt={img} />
			</div>
			<div className="body_text">
				<h3> {title} </h3>
				<h6>{description}</h6>
				<button>
					<span> VOIR PLUS </span>
					<span>
						<img src={Arrow} alt={Arrow} />
					</span>
				</button>
			</div>
		</div>
	);
};

export default ManufacturingCard;
