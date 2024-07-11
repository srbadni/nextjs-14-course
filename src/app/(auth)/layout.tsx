"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import "./style.css"


const navLinks = [
    { name: "ثبت نام", href: "/register" },
    { name: "ورود", href: "/login" },
    { name: "فراموشی رمز عبور", href: "/forgot-password" },
]

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <div>
            <div style={{display: "flex", gap: 15}}>
                {
                    navLinks.map(link => {
                        const isActive = pathname.startsWith(link.href)
                        return (
                            <Link className={isActive ? "mr-4 font-bold" : "text-blue-500 mr-4"} href={link.href} key={link.name}>
                                {link.name}
                            </Link>
                        )
                    })
                }
            </div>
            <h2>layout دااخلی</h2>
            {children}
        </div>
    )
}
