import { useState } from "react";
import "./Header.css";
import MenuIcon from "./MenuIcon";
import NavbarLink from "./NavbarLink";

const Header = () => {
    const [showNavBar, setShowNavbar] = useState(false);
    const toggleShowNavbar = () => {
        setShowNavbar(!showNavBar);
    }

    return (
        <header id="header">
            <nav className="nav-main">
                <div className="container">
                    <div className="sub-wrapper">
                        <NavbarLink text={"Kristian Huber"} target={"introduction"} />
                        <span>FULL STACK SOFTWARE DEVELOPER</span>
                    </div>
                    <div className="menu-icon" onClick={() => toggleShowNavbar()}>
                        <MenuIcon showNavBar={showNavBar} />
                    </div>
                    <div className={`nav-elements ${showNavBar?'visible':'hidden'}`}>
                        <ul>
                            <li>
                                <NavbarLink text={"Projects"} target={"project-display"} />
                            </li>
                            <li>
                                <NavbarLink text={"Contact"} target={"contact-info"} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;