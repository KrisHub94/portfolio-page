import { Link } from "react-scroll"

const NavbarLink = ({text, target}) => {
    return (
        <Link className="navlink" to={target} smooth="true" offset={-50}>{text}</Link>
    )
}
export default NavbarLink;