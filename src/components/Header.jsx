import React from 'react'
import ProgressiveImage from "react-progressive-image";
import Img from '../assets/Main Banner.png'


const Header = () => {

    window.addEventListener("scroll", function () {
		var header = document.querySelector(".NavbarContainer");
		header.classList.toggle("sticky", window.scrollY > 1);
	});

    return (
        <div>
            <div className="container">
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="NavbarContainer">
						{/* <Link to="upperNavbar" smooth={true} duration={600}> */}
							<h1>Cloudy</h1>
						{/* </Link> */}
						<div className="NavbarToggleBtn">
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
							<li>
								{/* <Link
									activeClass="activeNav"
									to="home"
									smooth={true}
									duration={600}
									spy={true}
									offset={-500}
								> */}
									Home
								{/* </Link> */}
							</li>
							<li>
								{/* <Link
									activeClass="activeNav"
									to="about"
									smooth={true}
									duration={600}
									spy={true}
									offset={-200}
								> */}
									About
								{/* </Link> */}
							</li>
							<li>
								{/* <Link
									activeClass="activeNav"
									to="service"
									smooth={true}
									duration={600}
									spy={true}
								> */}
									Service
								{/* </Link> */}
							</li>
							<li>
								{/* <Link
									activeClass="activeNav"
									to="hosting"
									smooth={true}
									duration={600}
									spy={true}
									offset={-120}
								> */}
									Hosting
								{/* </Link> */}
							</li>
							<li>
								{/* <Link
									activeClass="activeNav"
									to="contact"
									smooth={true}
									duration={600}
									spy={true}
									offset={-105}
								> */}
									Contact
								{/* </Link> */}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
        <div>
        <ProgressiveImage  delay={400} src={Img} placeholder={Img}>
		{(src, loading) => (
		<div className="home_container">
			<img
				style={{
				filter: loading ? "blur(4px)" : "blur(0px)",
				}}
				src={src}
				alt="bacground"
			/>
			<div className="home_body">
				<div className="home_body_inner">
					hello world
				</div>
			</div>
		</div>
		)}
		</ProgressiveImage>
        </div>
        </div>
    )
}

export default Header
