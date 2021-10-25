import React from 'react'

import './PlaceholderJumbotron_master.css'

const PlaceholderJumbotron = ({componentTitle="Sample Component"}) => {
    return (
        <div className="jumbotron-container">
            <h2>{componentTitle}</h2>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci officia minima voluptate cum eius aperiam iusto corrupti provident praesentium?</p>
            <hr className="my-4" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, deleniti assumenda laboriosam magni minus consequuntur quidem molestias omnis, quasi hic sit magnam ut. Accusantium officiis similique cum veniam obcaecati numquam.</p>
        </div>
    )
}

export default PlaceholderJumbotron
