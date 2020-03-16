import React from 'react'
// import { Link } from 'react-router-dom'

export const Product = ({ product }) => (
    <article className="userCls">
        <h2>{product.login}</h2>
        {/* <p>{product.body.substring(0, 500)}</p> */}
        <p>{product.url}</p>
        
    </article>
)