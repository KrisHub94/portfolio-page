import "./ProjectDisplay.css";
import PROJECTS from "./ProjectData";
import { useEffect, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import ClickableIcon from "../clickable_icon/ClickableIcon";
import ICONS from "../../constants/icons";


const ProjectDisplay = () => {
    const [displayedIndex, setDisplayedIndex] = useState(0);

    const selectNext = () => {
        displayedIndex === PROJECTS.length - 1? setDisplayedIndex(0): setDisplayedIndex(displayedIndex + 1);
    }
    const selectPrevious = () => {
        displayedIndex === 0? setDisplayedIndex(PROJECTS.length - 1): setDisplayedIndex(displayedIndex - 1);
    }

    const [animationPlayed, setAnimationPlayed] = useState(false);
    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0,
    });

    const handleAnimation = () => {
        if (isVisible && !animationPlayed) {
            setAnimationPlayed(true);
        }
    };

    return (
        <section 
            id="project-display"
            ref={elementRef}
            className={`${isVisible && !animationPlayed ? 'anim-fade-in anim-delay-short' : 'anim-fade-in-finished'}`}
            onAnimationEnd={handleAnimation}
            >
            <h2>HERE ARE SOME OF MY PROJECTS</h2>
            <div className="section-container">
                <div className="arrow-left" onClick={() => selectPrevious()}></div>
                <div id="display-container">
                    <div id="display-names-container" className="sub-wrapper">
                        {
                            PROJECTS.map(project => {
                                return <button 
                                className={project.id === displayedIndex?"project-button selected":"project-button"}
                                key={project.id} 
                                onClick={() => {
                                    setDisplayedIndex(project.id);
                                    }}
                                >
                                {project.name}
                                </button>
                            })
                        }
                    </div>
                    <div id="displayed-project" key={PROJECTS[displayedIndex].id}>
                        <img className="anim-fade-in" src={PROJECTS[displayedIndex].imgSrc} alt="a picture of my project"></img>
                        <div>
                            <h3 className="anim-fade-in">{PROJECTS[displayedIndex].name}</h3>
                            <p className="anim-fade-in anim-delay-short">{PROJECTS[displayedIndex].description}</p>
                            <div className="techstack-icons anim-fade-in anim-delay-medium">
                                <span>The following technologies were used in this project:</span>
                                {PROJECTS[displayedIndex].techIcons.map((icon) => {
                                    return <i className={"ci " + icon.ICON_CLASSNAME + " ci-md"} key={icon.ICON_CLASSNAME}></i>
                                })}
                            </div>
                            <div id="github-link" className="anim-fade-in anim-delay-medium">
                                <span>GitHub Link: </span>
                                <ClickableIcon link={PROJECTS[displayedIndex].gitHubLink} iconClassName={ICONS.GITHUB_LIGHT.ICON_CLASSNAME} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arrow-right" onClick={() => selectNext()}></div>
            </div>
        </section>
    )
}
export default ProjectDisplay;