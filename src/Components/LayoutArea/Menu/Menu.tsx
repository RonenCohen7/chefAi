import { NavLink } from "react-router-dom";
import "./Menu.css";
import { JSX } from "react";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/vip">VIP-Area</NavLink>
			<NavLink to="/home">Home</NavLink>
            <span> </span>
            <NavLink to="/chef-ai">Chef Ai</NavLink>
            <span> </span>
            <NavLink to="/about">About</NavLink>
            <span> </span>
            <NavLink to="/contact">Contact...</NavLink>
            <span> </span>
        </div>
    );
}
