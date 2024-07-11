import Link from "next/link";

export const metadata = {
    title: "درباره ما"
}

export default function AboutUs() {
    return <>
        <h1>صفحه درباره ما</h1>
        <Link href="/">صفحه اصلی</Link>
    </>
}