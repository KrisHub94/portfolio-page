import "./Header.css";

const Header = () => {
    return (
        <header id="header">
            <div className="main-wrapper">
                <nav className="nav-main">
                    <div className="sub-wrapper">
                        <a>Kristian Huber</a>
                        <span>FULL STACK SOFTWARE DEVELOPER</span>
                    </div>
                    <div className="sub-wrapper">
                        <a>Projects</a>
                        <a>Contact</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;