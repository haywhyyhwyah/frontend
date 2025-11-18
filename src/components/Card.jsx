import React from 'react'
import Btn from './Btn'

const Card = ({color, style, title, mainTxt, image, description, category}) => {
    return (
        <>
            <div className={`${color}`} style={{ width: style }}>
                <img src={image} className="card-img-top" alt="..." style={{width: "100px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{mainTxt}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{category}</p>
                    <Btn title="Go somewhere" color="btn btn-success"/>
                </div>
            </div>
        </>
    )
}

export default Card