"use client"
import {useState, ReactNode} from "react";

export default function ClientComponentOne({children}: {children: ReactNode}) {
    const [state, setState] = useState("alireza");

    return <div>
        client component one
        {children}
    </div>
}