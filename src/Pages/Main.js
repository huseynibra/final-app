import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Main() {
    const handleClick = useNavigate(



        
    )
    return (
        <>
            <Navbar />
            <button onClick={() => {
                handleClick('/service')
            }}>Click</button>

            <h1>Currently we are in Main page</h1>
        </>
    )
}