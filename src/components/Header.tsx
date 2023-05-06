import React from 'react'
import logo from "../assets/img/xs-logo-white.png";
import igIcon from "../assets/svg/brand-instagram.svg";
import ldIcon from "../assets/svg/brand-linkedin.svg";
import ghIcon from "../assets/svg/brand-github.svg";

export default function Header() {
  return (
    <header className="nav nav-bar bg-primary flex justify-content-around align-items-center">
        <a href="/" className="navbar-brand" style={{fontSize: "20px", color:"white"}}>
            <img src={logo} style={{width: "4rem"}} className=""/>
            Task-List-App
        </a>
        <nav className="">
          <a className="text-secondary" href="https://www.instagram.com/nachoxs_/"><img className="p-2" src={igIcon}/></a>
          <a className="text-secondary" href="https://www.linkedin.com/in/ignacio-joaqu%C3%ADn-pantoja-280a3322a/"><img className="p-2" src={ldIcon}/></a>
          <a className="text-secondary" href="https://github.com/NachoXS15"><img className="p-2" src={ghIcon}/></a>
        </nav>
    </header>
  )
}
