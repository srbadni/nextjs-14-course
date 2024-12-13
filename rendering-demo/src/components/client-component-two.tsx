"use client"
import {useState} from "react";

export default function ClientComponentOne() {
    const [state, setState] = useState("alireza");

    return <div>
        client component two
    </div>
}