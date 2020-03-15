import React from 'react'
// import { Link } from 'react-router-dom'

export const Product = ({ product }) => (
    <article className="userCls">
        <h2>{product.productName}</h2>
        <p>{product}</p>
        <p>{product.price}</p>
        
    </article>
)