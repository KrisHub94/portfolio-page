const ClickableIcon = ({link, iconClassName}) => {
    const className = "ci " + iconClassName;
    return(
        <a href={link}><i className={className}></i></a>
    )
}
export default ClickableIcon;