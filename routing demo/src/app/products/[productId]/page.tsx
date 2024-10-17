import React from 'react';
import {Metadata} from "next";

export const generateMetadata = ({params}: {params: {
        productId: string
    }}): Metadata => {
    return  {
        title: `محصول ${params.productId}`
    }
}

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