import React from "react";
import example1 from "../assets/example1.svg";
import example2 from "../assets/example2.svg";
import example3 from "../assets/example3.svg";
import example4 from "../assets/example4.svg";
import example5 from "../assets/example5.svg";
import example6 from "../assets/example6.svg";
import ExampleCard from "./ExampleCard";

const Examples = () => {

	const data = [
		{ img: example1, title: "Industrial" },
		{ img: example2, title: "Industrial" },
		{ img: example3, title: "Industrial" },
		{ img: example4, title: "Industrial" },
		{ img: example5, title: "Industrial" },
		{ img: example6, title: "Industrial" }
	]

	return (
		<div className="examples_container">
		<div className="innerExamples_container">
			<h1>
				<span className="heading_underline">EXEM</span>PLES
			</h1>
			<br />
			<br />
			<div className="container-fluid">
				<div className="row">
					{data.map((prev) => {
						const { title, img } = prev;
						return(
							<ExampleCard  img={img} title={title} />
					);
					})}
				</div>
			</div>
		</div>
		</div>
	);
};

export default Examples;
