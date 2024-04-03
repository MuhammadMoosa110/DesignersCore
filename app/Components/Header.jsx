"use client"
import Link from "next/link";
import Style from "@/app/Components/Header.css"
import logo from "@/app/Images/logo.png"
 

 function Header() {
    return ( 
        <>
        <div className="Nav"> 
        <img src={logo}/> <h3> DESIGNER`S CORE</h3> 
        <div className="links">  
        <Link style={{fontSize:"16px",textDecoration:'none',color:"white"}}  href="http://localhost:3000/"> Home</Link>
        <Link style={{fontSize:"16px",textDecoration:'none',color:"white"}}  href="/About"> About</Link>
        <Link style={{fontSize:"16px",textDecoration:'none',color:"white"}}  href="/Services"> Services</Link>
        <Link style={{fontSize:"16px",textDecoration:'none',color:"white"}}  href="/Gallery"> Gallery</Link>
        </div>
        </div>
        </>
     );
}

export default Header;