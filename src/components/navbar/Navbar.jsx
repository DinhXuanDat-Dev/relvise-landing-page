import "./Navbar.scss";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from "react";
import { cartIcon, searchIcon } from "./imports";

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(true);

    return (
        <div className="relvise__navbar">
            <div className="relvise__nav-container">
                <div className="relvise__nav-logo">
                    <h1>Relvise</h1>
                </div>
                <div className="relvise__nav-links">
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                        <li><img src={searchIcon} alt="search-icon"/></li>
                        <li><img src={cartIcon} alt="cart-icon"/></li>
                        <li>
                            {toggleMenu
                                ? <RiMenu3Line onClick={() => setToggleMenu(false)}/>
                                : <RiCloseLine onClick={() => setToggleMenu(true)}/>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    )
}

export default Navbar;