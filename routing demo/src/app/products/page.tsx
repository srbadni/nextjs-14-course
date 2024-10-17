import React from 'react';
import Link from "next/link";

const Products = () => {
    const PRODUCT_NUMBER = 100;
    return (
        <div>
            <h2>محصول اول</h2>
            <h2>محصول دوم</h2>
            <h2>محصول سوم</h2>
            <Link href={`products/${PRODUCT_NUMBER}`}>محصول صدم</Link>
        </div>
    );
};

export default Products;