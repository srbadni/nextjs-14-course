import React from 'react';

const MyProduct = ({params}: {params: {
        productId: string
    }}) => {
    return (
        <div>
            {params.productId}
        </div>
    );
};

export default MyProduct;