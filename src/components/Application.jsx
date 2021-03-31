import React from 'react'
import Icon1 from '../assets/eIcon1.svg'
import Icon2 from '../assets/eIcon2.svg'
import Icon3 from '../assets/eIcon3.svg'
import Icon4 from '../assets/eIcon4.svg'
import Icon5 from '../assets/eIcon5.svg'
import Icon6 from '../assets/eIcon6.svg'
import Icon7 from '../assets/eIcon7.svg'

const Application = () => {

    const data = [
        {img: Icon1, title: "LOREM IPSUM", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, dolorem !Lorem ipsum dolor, sit amet elit. Itaque, dolorem!"},
        {img: Icon2, title: "LOREM IPSUM", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, dolorem !Lorem ipsum dolor, sit amet elit. Itaque, dolorem!"},
        {img: Icon3, title: "LOREM IPSUM", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, dolorem !Lorem ipsum dolor, sit amet elit. Itaque, dolorem!"},
        {img: Icon4, title: "LOREM IPSUM", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, dolorem !Lorem ipsum dolor, sit amet elit. Itaque, dolorem!"},
        {img: Icon5, title: "LOREM IPSUM", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, dolorem !Lorem ipsum dolor, sit amet elit. Itaque, dolorem!"},
        {img: Icon6, title: "LOREM IPSUM", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, dolorem !Lorem ipsum dolor, sit amet elit. Itaque, dolorem!"},
        {img: Icon7, title: "LOREM IPSUM", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, dolorem !Lorem ipsum dolor, sit amet elit. Itaque, dolorem!"},
    ]

    return (
        <div className="application_container">
            <div className="innerApplication_container">
                <h1>
                    <span className="heading_underline">EXEMPLE</span>S D'APPLICATION
                </h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container-fluid">
				<div className="row">

                        {data.map((prev) => {
                            const { title, img, description } = prev;
                            return (     
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                                    <div className="application_card">
                                        <img src={img} alt={img} />
                                        <div className="applicationCard_body">
                                            <h3> {title} </h3>
                                            <h5> {description} </h5>
                                            <button>READ MORE</button>
                                        </div>
                                    </div>
                                </div>
                                );
                        })}
				</div>
			</div>
            </div>
        </div>
    )
}

export default Application
