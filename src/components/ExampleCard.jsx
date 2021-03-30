import React from 'react'

const ExampleCard = ({ title, img }) => {
    return (
        <div className="example_card col-lg-4 col-md-6 col-sm-12">
            <img src={img} alt={img} />
            <h2> {title} </h2>
        </div>
    )
}

export default ExampleCard
