import "./Background.css";
import BackgroundCircle from "./BackgroundCircle";

const Background = () => {
    const isOnMobile = window.innerWidth > 600?false:true;
    return(
        <div id="background-main">
            <BackgroundCircle number={1} radius={isOnMobile?80:140} />
            <BackgroundCircle number={2} radius={isOnMobile?130:190} />
            <BackgroundCircle number={3} radius={isOnMobile?180:240} />
        </div>
    )
}
export default Background;