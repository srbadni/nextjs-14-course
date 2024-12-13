import React, {useState} from 'react';
import NavLinks from "@/components/nav-links";
import NavSearch from "@/components/nav-search";

const Navbar = () => {
    console.log("رندر Navbar")
    return (
        <div>
            <NavLinks />
            <NavSearch />
        </div>
    );
};

export default Navbar;