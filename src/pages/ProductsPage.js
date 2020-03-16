import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsSelector, fetchProducts } from '../slices/products'

import { Product } from '../components/Product'

const ProductsPage = () => {
    const dispatch = useDispatch()
    const { products, loading, hasErrors } = useSelector(productsSelector)

    useEffect(() => {
        dispatch(fetchProducts())

    }, [dispatch])

    const renderProducts = () => {
        if (loading) return <p>Loading Products ...</p>
        if (hasErrors) return <p>Unable to Load Products</p>

        return products.map(product => <Product key={product.id} product={product} />);
    };

    return (
        <section>
            <h1>Products</h1>
            {renderProducts()}
        </section>
    )
}

export default ProductsPage;