import React from "react";
import Logo from "../assets/logo.svg";

const Footer = () => {
	return (
		<>
			<div id="footer" className="footer_container">
				<div className="innerFooter_container">
					<div className="left_side">
						<img className="logo" src={Logo} alt={Logo} />
						<br />
						<br />
						<h5>
							Mekanisk propose des services de fabrication additive (impression
							3d) de haute qualité, permettant des pièces robustes (qui peuvent
							être renforcées avec des fibres composites, des résines, des
							inserts métalliques, etc.)
						</h5>
					</div>
					<div className="right_side">
						<div className="container-fluid">
							<div className="row">
								<div className="col-lg-3 col-md-3 col-sm-6">
									<h3>
										<span className="heading_underline">À pro</span>po de nous
									</h3>
									<br />
									<ul>
										<li>Lorem</li>
										<li>Lorem</li>
										<li>Lorem</li>
										<li>Lorem</li>
									</ul>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 ">
									<h3>
										<span className="heading_underline">Un e</span>rvice
									</h3>
									<br />
									<ul>
										<li>Product development</li>
										<li>impression en 3D</li>
										<li>Découpe au laser</li>
										<li>Usinage</li>
									</ul>
								</div>
								<div className="col-lg-2 col-md-3 col-sm-6  mt-5 mt-md-0">
									<h3>
										<span className="heading_underline">Easi</span>
									</h3>
									<br />
									<ul>
										<li>Lorem</li>
										<li>Lorem</li>
										<li>Lorem</li>
										<li>Lorem</li>
									</ul>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6  mt-5 mt-md-0">
									<h3>
										<span className="heading_underline">Cont</span>actez-nous
									</h3>
									<br />
									<ul>
										<li>Lorem</li>
										<li>Lorem</li>
										<li>Lorem</li>
										<li>Lorem</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
