const BackgroundCircle = ({number, radius}) => {
    const className = "circle" + number; 

    return(
            <svg xmlns="http://www.w3.org/2000/svg">
                <circle className={className}  cx={"50%"} cy={"50%"} r={radius} fill="none" stroke="black" strokeWidth="30" strokeDasharray="3"></circle>
            </svg>
    )
}
export default BackgroundCircle;