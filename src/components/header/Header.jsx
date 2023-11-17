import "./Header.css";
import NavbarLink from "./NavbarLink";

const Header = () => {
    return (
        <header id="header">
            <div>
                <nav className="nav-main">
                    <div className="sub-wrapper">
                        <NavbarLink text={"Kristian Huber"} target={"introduction"} />
                        <span>FULL STACK SOFTWARE DEVELOPER</span>
                    </div>
                    <div className="sub-wrapper">
                        <NavbarLink text={"Projects"} target={"project-display"} />
                        <NavbarLink text={"Contact"} target={"contact-info"} />
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;