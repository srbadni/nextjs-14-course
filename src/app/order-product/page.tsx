"use client"

import React from 'react';
import {useRouter} from "next/navigation";

const OrderProduct = () => {
    const router = useRouter();

    const handleClick = () => {
        console.log("خرید با موفقیت انجام شد");
        router.push("/");
    }

    return (
        <div>
            <h2>اطلاعات خرید</h2>
            <button onClick={handleClick}>خرید</button>
        </div>
    );
};

export default OrderProduct;