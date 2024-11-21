"use client"

import {Fragment, useState} from "react";

export default function Page() {
    const [name, setName] = useState<string>("");
    console.log("dashboard client page")

    return (
        <Fragment>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <p>{name}</p>
        </Fragment>
    )
}