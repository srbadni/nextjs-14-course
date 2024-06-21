import React from 'react';
import {notFound} from "next/navigation";

const ReviewItem = ({params}: {
    params: {
        productId: string,
        reviewId: string,
    }
}) => {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }

    return (
        <div>
            نظر {params.reviewId} برای محصول {params.productId}
        </div>
    );
};

export default ReviewItem;