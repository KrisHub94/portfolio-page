import "./Background.css";
import BackgroundCircle from "./BackgroundCircle";

const Background = () => {
    return(
        <div id="background-main">
            <BackgroundCircle number={1} radius={140} />
            <BackgroundCircle number={2} radius={190} />
            <BackgroundCircle number={3} radius={240} />
        </div>
    )
}
export default Background;