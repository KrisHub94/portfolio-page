import "./Header.css";

const Header = () => {
    return (
        <header id="header">
            <div className="main-wrapper">
                <nav className="nav-main">
                    <div className="sub-wrapper">
                        <p>Kristian Huber</p>
                        <p>FULL STACK SOFTWARE DEVELOPER</p>
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