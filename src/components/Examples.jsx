import React from "react";
import example1 from "../assets/example1.svg";
import example2 from "../assets/example2.svg";
import example3 from "../assets/example3.svg";

const Examples = () => {
	return (
		<div className="examples_container">
			<h1>
				<span className="heading_underline">EXEM</span>PLES
			</h1>
			<br />
			<br />
			<div className="container-fluid">
				<div className="row">
					<div className="col-3">
						<img src={example1} alt={example1} />
						<h2>Industriel</h2>
					</div>
					<div className="col-3">
						<img src={example2} alt={example2} />
						<h2>Industriel</h2>
					</div>
					<div className="col-3">
						<img src={example3} alt={example3} />
						<h2>Industriel</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Examples;
