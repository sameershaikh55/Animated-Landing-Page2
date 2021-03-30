import React from 'react'
import Img from '../assets/aboutImg.svg'

const StartUp = () => {
    return (
        <div className="startUp_container">
		<div className="innerStartUp_container">
            <h1><span className="heading_underline">PME ou </span><span>&#60;</span><span>&#60;</span> Start up <span>&#62;</span><span>&#62;</span> ?</h1>
            <div className="startUp_body">
                <div>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis odit officiis ducimus consequatur quaerat.</h5>
                    <br />
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis odit officiis ducimus consequatur quaerat.</h5>
                    <br />
                    <h5>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis odit officiis ducimus consequatur quaerat.</h5>
                    <br />
                    <h5>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis odit officiis ducimus consequatur quaerat.</h5>
                    <br />
                    <h5>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis odit officiis ducimus consequatur quaerat.</h5>
                </div>
                <div>
                    <img src={Img} alt={Img} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default StartUp
