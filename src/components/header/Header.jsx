import "./Header.css";

const Header = () => {
    return (
        <header id="header">
            <div className="main-wrapper">
                <nav className="nav-main">
                    <div className="sub-wrapper">
                        <a href="#introduction">Kristian Huber</a>
                        <span>FULL STACK SOFTWARE DEVELOPER</span>
                    </div>
                    <div className="sub-wrapper">
                        <a href="#project-display">Projects</a>
                        <a href="#contact-info">Contact</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;