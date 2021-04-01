import React from "react";
import example1 from "../assets/example1.svg";
import example2 from "../assets/example2.svg";
import example3 from "../assets/example3.svg";
import example4 from "../assets/example4.svg";
import example5 from "../assets/example5.svg";
import example6 from "../assets/example6.svg";
import ExampleCard from "./ExampleCard";
import LightSpeed from "react-reveal/LightSpeed";

const Examples = () => {
	const data = [
		{ img: example1, title: "Industriel" },
		{ img: example2, title: "Pharmaceutique" },
		{ img: example3, title: "Robotique" },
		{ img: example4, title: "Automobile" },
		{ img: example5, title: "Transport" },
		{ img: example6, title: "Professionnels ET start-ups" },
	];

	return (
		<div className="examples_container">
			<div className="innerExamples_container">
				<LightSpeed>
					<h1>
						<span className="heading_underline">EXEM</span>PLES
					</h1>
				</LightSpeed>
				<br />
				<br />
				<div className="container-fluid">
					<div className="row">
						{data.map((prev) => {
							const { title, img } = prev;
							return <ExampleCard img={img} title={title} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Examples;
