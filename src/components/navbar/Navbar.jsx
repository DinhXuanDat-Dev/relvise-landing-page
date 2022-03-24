import "./Navbar.scss";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { cartIcon, searchIcon } from "./imports";
import useScrollListener from "./hooks/useScrollListener";


const Navbar = () => {
    //Change Navbar styles when scrolling
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();
    useEffect(() => {
        const _classList = ['nav-bar--scrolling__hidden'];
    
        if (scroll.y > 150)
          _classList.push("nav-bar--scrolling");
    
        setNavClassList(_classList);
    }, [scroll.y]);

    //Menu active
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    })

    useEffect(() => {
        if(screenSize < 768){
            setToggleMenu(false)
        }else{
            setToggleMenu(true)
        }
    }, [screenSize])

    // menu active


    return (
        <div className={navClassList.join(" ") + " relvise__navbar"}>
            <div className="relvise__nav-container">
                <div className="relvise__nav-logo">
                    <h1>Relvise</h1>
                </div>
                <div className="relvise__nav-links">
                    <ul>
                        <div className="relvise__nav-menu">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#product">Product</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </div>
                        <li><img src={searchIcon} alt="search-icon"/></li>
                        <li><img src={cartIcon} alt="cart-icon"/></li>
                        <li className="toggle-menu">
                            {toggleMenu
                                ? <RiCloseLine onClick={() => setToggleMenu(false)}/>
                                : <RiMenu3Line onClick={() => setToggleMenu(true)}/>
                            }
                        </li>
                    </ul>
                </div>
            </div>
            {
                toggleMenu &&
                <div className="relvise__nav-menu_sp">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </div>
            }
        </div>    
    )
}

export default Navbar;