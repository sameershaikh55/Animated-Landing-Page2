import React from "react";
// import ProgressiveImage from "react-progressive-image";
// import Img from "../assets/heroImg (1)-min-min (1).png";
import Logo from "../assets/logo.svg";
import Zoom from "react-reveal/Zoom";

import { Link } from "react-scroll";

const Header = ({ ClickEvent }) => {
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".NavbarContainer");
		header.classList.toggle("sticky", window.scrollY > 1);
	});

	return (
		<div>
			<div id="header" className="container">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="NavbarContainer">
							<Link to="header" smooth={true} duration={600}>
								<img src={Logo} alt={Logo} />
							</Link>
							<div onClick={ClickEvent} className="NavbarToggleBtn">
								<button className="navbar-toggler collapsed" type="button">
									<span className="menu-btn d-inline-block" id="menu-btn">
										<span className="line"></span>
										<span className="line"></span>
										<span className="line"></span>
									</span>
									<span className="ion-navicon"></span>
								</button>
							</div>
							<ul>
								<Link
									activeClass="activeNav"
									to="aboutUs"
									smooth={true}
									duration={600}
									spy={true}
								>
									<li>Mekanisk</li>
								</Link>
								<Link
									activeClass="activeNav"
									to="material"
									smooth={true}
									duration={600}
									spy={true}
								>
									<li>Matériaux</li>
								</Link>
								<Link
									activeClass="activeNav"
									to="application"
									smooth={true}
									duration={600}
									spy={true}
								>
									<li>
										Easi – evaluation in ayres <br /> sensory integration
									</li>
								</Link>
								<Link
									activeClass="activeNav"
									to="services"
									smooth={true}
									duration={600}
									spy={true}
									offset={-120}
								>
									<li>Nos produits</li>
								</Link>
								<Link
									activeClass="activeNav"
									to="contact"
									smooth={true}
									duration={600}
									spy={true}
								>
									<li>Contact</li>
								</Link>
								<Link
									activeClass="activeNav"
									to="contact"
									smooth={true}
									duration={600}
									spy={true}
									offset={-105}
								>
									<li>English</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div>
				{/* <ProgressiveImage delay={400} src={Img} placeholder={Img}> */}
				{/* {(src, loading) => ( */}
				<div className="home_container">
					{/* <img
								style={{
									filter: loading ? "blur(4px)" : "blur(0px)",
									backgroundColor: "rgba(0,0,0,0.2)",
								}}
								src={src}
								alt="bacground"
							/> */}
					<div className="home_body">
						<div className="home_body_inner">
							<Zoom right cascade>
								<h1>Bienvenue chez Mekanisk</h1>
							</Zoom>
							<br />
							<h4>Services de conception et de fabrication additive</h4>
							<h4>Impression 3D industrielle</h4>
							<br />
							<button class="G_btn">
								<span>Soumission</span>
							</button>
						</div>
					</div>
				</div>
				{/* )}
				</ProgressiveImage> */}
			</div>
		</div>
	);
};

export default Header;
