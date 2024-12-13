"use client"
import React, {useState} from 'react';

const NavSearch = () => {
    const [search, setSearch] = useState<string>("");
    console.log("رندر NavSearch")
    return (
        <div>
            جستجوی منو
        </div>
    );
};

export default NavSearch;