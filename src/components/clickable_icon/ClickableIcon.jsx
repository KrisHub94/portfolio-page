import { useState } from "react";

const ClickableIcon = ({link, iconClassName}) => {
    const className = "ci " + iconClassName + " ci-3x";
    const classNameHover = className + " ci-invert";
    const [classNameState, setClassNameState] = useState(className);
    return(
        <a href={link} target="_blank" rel="noreferrer">
            <i 
                className={classNameState} 
                onMouseEnter={() => setClassNameState(classNameHover)}
                onMouseLeave={() => setClassNameState(className)}
            ></i>
        </a>
    )
}
export default ClickableIcon;