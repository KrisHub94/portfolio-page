import ICONS from "../../constants/icons";
import ClickableIcon from "../clickable_icon/ClickableIcon";

const ContactInfo = () => {
    return (
        <section id="contact-info">
            <h2>Contact Info - I would love to get in touch with you!</h2>
            <p>If you want to talk to me about a job or working on a project together, or if you
                want to give feedback regarding this page, even if you just want to talk about
                video games please contact me!
            </p>
            <i className="cib-codewars"></i>
            <div className="icons-container">
                <ClickableIcon link={ICONS.GITHUB_LIGHT.LINK} iconClassName={ICONS.GITHUB_LIGHT.ICON_CLASSNAME} />
                <ClickableIcon link={ICONS.GMAIL.LINK} iconClassName={ICONS.GMAIL.ICON_CLASSNAME} />
                <ClickableIcon link={ICONS.LINKEDIN.LINK} iconClassName={ICONS.LINKEDIN.ICON_CLASSNAME} />
            </div> 
        </section>
    )
}
export default ContactInfo;