import React from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import service1 from "../assets/service1.svg";
import service2 from "../assets/service2.svg";
import service3 from "../assets/service3.svg";

const Services = () => {
	const data = [
		{
			title: "impression en 3D",
			img: service1,
			description:
				"l'impression 3d est un processus de fabrication un objet physique d'un trois modèle numérique dimensionnel",
		},
		{
			title: "Développement de produits",
			img: service2,
			description:
				"Le faisceau laser e une colonne de lumière de très haute intensité, d'une seule longueur d'onde, ou couleur.",
			classN: "rPadding",
		},
		{
			title: "Assemblée",
			img: service3,
			description:
				"La tôle est la base de tous les engi-neering aujourd'hui. Nous pouvons le voir partout - depuis les voitures",
		},
		{
			title: "impression en 3D",
			img: service1,
			description:
				"l'impression 3d est un processus de fabrication un objet physique d'un trois modèle numérique dimensionnel",
		},
		{
			title: "Développement de produits",
			img: service2,
			description:
				"Le faisceau laser e une colonne de lumière de très haute intensité, d'une seule longueur d'onde, ou couleur.",
			classN: "rPadding",
		},
		{
			title: "Assemblée",
			img: service3,
			description:
				"La tôle est la base de tous les engi-neering aujourd'hui. Nous pouvons le voir partout - depuis les voitures",
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
				breakpoint: 1360,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};
	return (
		<div className="service_container">
			<h1>
				<span className="heading_underline">Nos </span>services
			</h1>
			<h5>
				MEKANISK propose des services de fabrication additive (impression 3D) de
				haute qualité, permettant des pièces robustes (qui peuvent être
				renforcées avec des fibres composites, des résines, des inserts
				métalliques, etc.) et une expertise en conception 3D pour fabrication
				additive (DFAM)
			</h5>
			<br />
			<br />
			<div className="main_slider_container">
				<Slider {...settings}>
					{data.map((prev) => {
						const { img, title, description, classN } = prev;
						return (
							<ServiceCard
								title={title}
								img={img}
								description={description}
								classN={classN}
							/>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Services;
