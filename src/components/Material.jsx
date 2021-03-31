import React from 'react'
import material1 from '../assets/material1.svg'
import material2 from '../assets/material2.svg'
import material3 from '../assets/material3.svg'
import material4 from '../assets/material4.svg'
import material5 from '../assets/material5.svg'

const Material = () => {
    return (
        <div className="material_container">
            <h1><span className="heading_underline">Mater</span>iuox</h1>
            <br/>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolore modi, dolor corporis quos inventore? Labore alias vel nemo excepturi magni. Eos eum unde beatae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, excepturi.</h5>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container-fluid">
				<div className="row">
                    {/* SECTION 1 START */}
                    <div className="materialCard col-lg-6 col-md-12 col-sm-12 align-self-center">
                        <h3><span className="materialCard_heading">LOR</span>EM IPSUM</h3>
                        <h5 className="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam labore ab laboriosam ex error cumque, esse blanditiis nulla quis.</h5>
                    </div>
                    <div className="materialCard col-lg-6 col-md-12 col-sm-12">
                        <img src={material1} alt={material1} />
                    </div>
                    {/* SECTION 1 END */}

                    {/* SECTION 2 START */}
                    <div className="materialCard col-lg-6 col-md-12 col-sm-12">
                        <img src={material2} alt={material2} />
                    </div>
                    <div className="materialCard col-lg-6 col-md-12 col-sm-12 align-self-center">
                        <div className="materialCard_text">
                            <h3><span className="materialCard_heading">LOR</span>EM IPSUM</h3>
                            <h5 className="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam labore ab laboriosam ex error cumque, esse blanditiis nulla quis.</h5>
                        </div>
                    </div>
                    {/* SECTION 2 END */}

                    {/* SECTION 3 START */}
                    <div className="materialCard col-lg-6 col-md-12 col-sm-12 align-self-center">
                        <h3><span className="materialCard_heading">LOR</span>EM IPSUM</h3>
                        <h5 className="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam labore ab laboriosam ex error cumque, esse blanditiis nulla quis.</h5>
                    </div>
                    <div className="materialCard col-lg-6 col-md-12 col-sm-12">
                        <img src={material3} alt={material3} />
                    </div>
                    {/* SECTION 3 END */}

                    {/* SECTION 4 START */}
                    <div className="materialCard col-lg-6 col-md-12 col-sm-12">
                        <img src={material4} alt={material4} />
                    </div>
                    <div className="materialCard col-lg-6 col-md-12 col-sm-12 align-self-center">
                        <div className="materialCard_text">
                            <h3><span className="materialCard_heading">LOR</span>EM IPSUM</h3>
                            <h5 className="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam labore ab laboriosam ex error cumque, esse blanditiis nulla quis.</h5>
                        </div>
                    </div>
                    {/* SECTION 4 END */}

                    {/* SECTION 5 START */}
                    <div className="materialCard col-lg-6 col-md-12 col-sm-12 align-self-center">
                        <h3><span className="materialCard_heading">LOR</span>EM IPSUM</h3>
                        <h5 className="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam labore ab laboriosam ex error cumque, esse blanditiis nulla quis.</h5>
                    </div>
                    <div className="materialCard col-lg-6 col-md-12 col-sm-12">
                        <img src={material5} alt={material5} />
                    </div>
                    {/* SECTION 5 END */}

				</div>
			</div>
        </div>
    )
}

export default Material
