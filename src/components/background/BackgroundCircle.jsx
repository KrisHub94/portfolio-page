import { useState } from "react";

const BackgroundCircle = ({number, radius}) => {
    const className = "circle" + number;

    return(
            <svg className={className} xmlns="http://www.w3.org/2000/svg">
                <circle  cx={"50%"} cy={"50%"} r={radius} fill="none" stroke="black" strokeWidth="20" strokeDasharray="2"></circle>
            </svg>
    )
}
export default BackgroundCircle;