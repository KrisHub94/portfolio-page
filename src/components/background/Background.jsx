import "./Background.css";
import BackgroundCircle from "./BackgroundCircle";

const Background = () => {
    return(
        <div id="background-main">
            <BackgroundCircle number={1} radius={80} />
            <BackgroundCircle number={2} radius={110} />
            <BackgroundCircle number={3} radius={140} />
        </div>
    )
}
export default Background;