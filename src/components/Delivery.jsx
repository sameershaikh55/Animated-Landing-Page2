import React from "react";
import Slider from "react-slick";

const Delivery = () => {
	const data = [
		{
			description:
				"l'impression 3d est un processus de fabrication un objet physique d'un trois modèle numérique dimensionnel",
		},
		{
			description:
				"Le faisceau laser e une colonne de lumière de très haute intensité, d'une seule longueur d'onde, ou couleur.",
			classN: "rPadding",
		},
		{
			description:
				"La tôle est la base de tous les engi-neering aujourd'hui. Nous pouvons le voir partout - depuis les voitures",
		},
		{
			description:
				"l'impression 3d est un processus de fabrication un objet physique d'un trois modèle numérique dimensionnel",
		},
		{
			description:
				"Le faisceau laser e une colonne de lumière de très haute intensité, d'une seule longueur d'onde, ou couleur.",
			classN: "rPadding",
		},
		{
			description:
				"La tôle est la base de tous les engi-neering aujourd'hui. Nous pouvons le voir partout - depuis les voitures",
		},
	];

	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	return (
		<div className="deliverySlider_conatiner">
			<div className="innerDeliverySlider_conatiner">
				<h1>
					<span className="heading_underline">Livra</span>ison
				</h1>
				<br />
				<br />
				<br />
				<div className="main_slider_container">
					<Slider {...settings}>
						{data.map((prev) => {
							const { description } = prev;
							return (
								<>
									<h5> {description} </h5>
									<br />
									<button className="G_btn py-3 px-4">Contactez-nous</button>
								</>
							);
						})}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Delivery;
