import ICONS from "../../constants/icons";

const Footer = () => {
    const techStackIcons = [
        ICONS.CSS,
        ICONS.HTML,
        ICONS.JAVASCRIPT,
        ICONS.NODEJS,
        ICONS.REACTJS,
    ]
    return (
        <section id="footer">
            <span>This website was made using: </span>
            {techStackIcons.map((icon) => {
                return <i className={"ci " + icon.ICON_CLASSNAME + " ci-md"} key={icon.ICON_CLASSNAME}></i>
            })}
        </section>
    )
}
export default Footer;