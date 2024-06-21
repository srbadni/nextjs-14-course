import React from 'react';

const ReviewItem = ({params}: {
    params: {
        productId: string,
        reviewId: string,
    }
}) => {
    return (
        <div>
            نظر {params.reviewId} برای محصول {params.productId}
        </div>
    );
};

export default ReviewItem;