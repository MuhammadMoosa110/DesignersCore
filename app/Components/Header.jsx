"use client"
import Link from "next/link";
import Style from "@/app/Components/Header.css"
import logo from "@/app/Images/logo.png"
import Page from "@/app/page"
 

 function Header() {
    return ( 
        <>
        <div className="Nav"> 
        <div className="logo"> <img src={logo}/> <h3> DESIGNER`S CORE</h3> </div>
        <div className="links">  
        {/* <Link style={{fontSize:"16px",textDecoration:'none',color:"white"}}  href=" https://designers-core-4fwi.vercel.app/"> Home</Link> */}
        <Link style={{fontSize:"16px",textDecoration:'none',color:"white"}}  href="/About"> About</Link>
        <Link style={{fontSize:"16px",textDecoration:'none',color:"white"}}  href="/Services"> Services</Link>
        <Link style={{fontSize:"16px",textDecoration:'none',color:"white"}}  href="/Gallery"> Gallery</Link>
        </div>
        </div>
        </>
     );
}

export default Header;