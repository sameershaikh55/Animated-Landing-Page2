import React from "react";
import Slider from "react-slick";
import ManufacturingCard from "./ManufacturingCard";
import Manufacturing1 from "../assets/manufacturing1.svg";
import Manufacturing2 from "../assets/manufacturing2.svg";
import Manufacturing3 from "../assets/manufacturing3.svg";
import Fade from "react-reveal/Fade";

const Manufacturing = () => {
	const data = [
		{
			title: "Usinage",
			img: Manufacturing1,
			description:
				"les parcours d'outils 3d sont parfaits pour les formes organiques",
		},
		{
			title: "Tôle",
			img: Manufacturing2,
			description:
				"nous fournissons des services de modélisation 3d de qualité aux fabricants",
		},
		{
			title: "Autres",
			img: Manufacturing3,
			description:
				"contacte nous pour voir de quelle manière nous pouvons t'aider!",
		},
		{
			title: "Usinage",
			img: Manufacturing1,
			description:
				"les parcours d'outils 3d sont parfaits pour les formes organiques",
		},
		{
			title: "Tôle",
			img: Manufacturing2,
			description:
				"nous fournissons des services de modélisation 3d de qualité aux fabricants",
		},
		{
			title: "Autres",
			img: Manufacturing3,
			description:
				"contacte nous pour voir de quelle manière nous pouvons t'aider!",
		},
	];

	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 710,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};
	return (
		<Fade bottom>
			<div className="manufacturing_container">
				<h1>
					<span className="heading_underline">Besoin</span> d'autres procédés de
					fabrication que l'impression 3D?
				</h1>
				<br />
				<h5>
					Les processus de fabrication traditionnels tels que le formage et le
					moulage par injection sont plus adaptés à la fabrication à grande
					échelle, tandis que l'impression 3D peut être pluséconomique pour les
					petits volumes.
				</h5>
				<br />
				<br />
				<div className="main_slider_container">
					<Slider {...settings}>
						{data.map((prev) => {
							const { img, title, description } = prev;
							return (
								<ManufacturingCard
									title={title}
									img={img}
									description={description}
								/>
							);
						})}
					</Slider>
				</div>
			</div>
		</Fade>
	);
};

export default Manufacturing;
