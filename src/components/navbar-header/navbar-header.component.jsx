import React from 'react';
import SearchBar from '../ExpandableSearchBar/SearchBar';
import './navbar-header.scss'
import { Link } from "react-router-dom";

const StickyTopNavbar = () => {

    const handleShowNavbar = () => {
        const menu = document.querySelector(".menu_list");
        const menuBtn = document.querySelector(".menu_btn");
        menu.classList.forEach(item => {
            if(item === "active") { 
                menu.classList.remove("active");
                menuBtn.classList.remove("hide");
                
            }
            else { 
                menu.classList.add("active");
                menuBtn.classList.add("hide");
                
            }
        })
    }
    return (
        <nav className='navbar'>
            <div className="content">
                <div className='logo'><Link to='/'><strong>Movies Website</strong></Link></div>
                    <ul className="menu_list">
                        <div className='icon cancel_btn' onClick={handleShowNavbar}>
                            <i className="fas fa-times fa-lg"></i>
                        </div>
                        <li><SearchBar/></li>
                        <li><Link to="/" className="active"><i className="fas fa-home"></i></Link></li>
                        <li><a href="http://www.markosbahgat.com"  target="_blank" rel="noreferrer">About</a></li>
                        <li onClick={() => localStorage.getItem("token") && localStorage.removeItem("token")}><a href='/registration'>{localStorage.getItem("token")? "Log Out":"Sign Up"}</a></li>
                        <li><a href="http://www.markosbahgat.com"  target="_blank" rel="noreferrer">ContactUs</a></li>
                        <li><a href="http://www.markosbahgat.com"  target="_blank" rel="noreferrer"><i className="fas fa-user-circle fa-lg"></i></a></li>
                    </ul>
                    <div className='icon menu_btn' onClick={handleShowNavbar}>
                        <i className="fas fa-bars fa-lg"></i>
                    </div>
            </div>
        </nav>
     );
}
 
export default StickyTopNavbar;