import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { dataProduct } from './dataProduct';
import { getSelectedCategory, getSearchQuery } from '../../redux/filterSlice';

function Products() {
    const selectedCategory = useSelector(getSelectedCategory);
    const searchQuery = useSelector(getSearchQuery);

    const filteredProducts = dataProduct
        .filter(product => {
            if (selectedCategory === 'all' || selectedCategory === product.category) {
                return true;
            }
            return false;
        })
        .filter(product => {
            const lowerCaseQuery = searchQuery.toLowerCase();
            return product.name.toLowerCase().includes(lowerCaseQuery);
        });

    return (
        <div className="products-container">
            {filteredProducts.map((product, id) => (
                <Product key={id} product={product} />
            ))}
        </div>
    );
}

export default Products;
