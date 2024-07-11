import React from 'react';
import {notFound} from "next/navigation";

const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
}

const ReviewItem = ({params}: {
    params: {
        productId: string,
        reviewId: string,
    }
}) => {
    if (getRandomInt(2) === 1) {
        throw new Error("خطا در بارگزاری");
    }
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