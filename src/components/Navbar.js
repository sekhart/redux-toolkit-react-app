import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav>
        <section>
            <Link to="/"><strong>Dashboard</strong></Link>
            <Link to="/products"><strong>Products</strong></Link>
        </section>

    </nav>

)

export default Navbar