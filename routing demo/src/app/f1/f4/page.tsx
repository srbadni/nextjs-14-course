import React from 'react';
import Link from "next/link";

const F4 = () => {
    return (
        <div>
            <h6>صفحه f4</h6>
            <Link href="/f1/f3">f3</Link>
            <Link href="/aboutus">aboutus</Link>
        </div>
    );
};

export default F4;