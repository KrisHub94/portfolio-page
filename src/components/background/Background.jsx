import "./Background.css";

const Background = () => {
    return(
        <div id="background-main">
            <svg className="circle1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="80" fill="none" stroke="black" strokeWidth="20" strokeDasharray="2"></circle>
            </svg>
            <svg className="circle2" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="110" fill="none" stroke="black" strokeWidth="20" strokeDasharray="2"></circle>
            </svg>
            <svg className="circle3" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="140" fill="none" stroke="black" strokeWidth="20" strokeDasharray="2"></circle>
            </svg>
        </div>
    )
}
export default Background;