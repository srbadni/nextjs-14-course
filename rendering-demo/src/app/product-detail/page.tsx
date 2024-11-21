import {Product} from "@/components/product";
import {Reviews} from "@/components/reviews";
import {Suspense} from "react";
const IsLoading = () => {
    return <p>در حال بارگذاری ...</p>
}
export default function ProductDetailPage() {
    return (
        <div>
            <h1>صفحه جزئیات محصول</h1>
            <Suspense fallback={<IsLoading/>}>
                <Product />
            </Suspense>
            <Suspense fallback={<IsLoading/>}>
                <Reviews />
            </Suspense>
        </div>
    );
}