import React from 'react';
import SearchBar from '../ExpandableSearchBar/SearchBar';
import './navbar-header.scss'

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
                <div className='logo'><a href='markosbahgat.com'><strong>Movies Website</strong></a></div>
                    <ul className="menu_list">
                        <div className='icon cancel_btn' onClick={handleShowNavbar}>
                            <i className="fas fa-times fa-lg"></i>
                        </div>
                        <li><SearchBar/></li>
                        <li><a href="http://www.markosbahgat.com" target="_blank" rel="noreferrer" className="active"><i class="fas fa-home"></i></a></li>
                        <li><a href="http://www.markosbahgat.com">About</a></li>
                        <li><a href="/components/SignUpForm/SignUpForm">Sign Up</a></li>
                        <li><a href="http://www.markosbahgat.com">ContactUs</a></li>
                        <li><a href="http://www.markosbahgat.com"><i className="fas fa-user-circle fa-lg"></i></a></li>
                    </ul>
                    <div className='icon menu_btn' onClick={handleShowNavbar}>
                        <i className="fas fa-bars fa-lg"></i>
                    </div>
            </div>
        </nav>
     );
}
 
export default StickyTopNavbar;