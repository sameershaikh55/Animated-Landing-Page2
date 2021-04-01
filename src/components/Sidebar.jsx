import React from "react";
import Bounce from "react-reveal/Bounce";

import { ImCross } from "react-icons/im";

import { Link } from "react-scroll";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ImCross onClick={ClickEvent} className="CrossBTn" />
			<Bounce left cascade>
				<ul>
					<li>
						<Link
							activeClass="activeNav"
							to="aboutUs"
							smooth={true}
							duration={600}
							spy={true}
							onClick={ClickEvent}
						>
							Mekanisk
						</Link>
					</li>
					<li>
						<Link
							activeClass="activeNav"
							to="material"
							smooth={true}
							duration={600}
							spy={true}
							onClick={ClickEvent}
						>
							Matériaux
						</Link>
					</li>
					<li>
						<Link
							activeClass="activeNav"
							to="application"
							smooth={true}
							duration={600}
							spy={true}
							onClick={ClickEvent}
						>
							Easi – evaluation
						</Link>
					</li>
					<li>
						<Link
							activeClass="activeNav"
							to="services"
							smooth={true}
							duration={600}
							spy={true}
							onClick={ClickEvent}
						>
							Nos produits
						</Link>
					</li>
					<li>
						<Link
							activeClass="activeNav"
							to="contact"
							smooth={true}
							duration={600}
							spy={true}
							offset={-105}
							onClick={ClickEvent}
						>
							Contact
						</Link>
					</li>
					<li>
						<Link
							activeClass="activeNav"
							to="footer"
							smooth={true}
							duration={600}
							spy={true}
							offset={-105}
							onClick={ClickEvent}
						>
							English
						</Link>
					</li>
				</ul>
			</Bounce>
		</div>
	);
};

export default Sidebar;
