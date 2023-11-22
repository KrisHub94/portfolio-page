import "./Header.css";
import NavbarLink from "./NavbarLink";

const Header = () => {
    return (
        <header id="header">
            <nav className="nav-main">
                <div className="container">
                    <div className="sub-wrapper">
                        <NavbarLink text={"Kristian Huber"} target={"introduction"} />
                        <span>FULL STACK SOFTWARE DEVELOPER</span>
                    </div>
                    <div className="nav-elements">
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