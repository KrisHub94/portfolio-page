import "./ProjectDisplay.css";
import PROJECTS from "./ProjectData";
import { useState } from "react";

const ProjectDisplay = () => {
    const [displayedIndex, setDisplayedIndex] = useState(0);
    const selectNext = () => {
        displayedIndex === PROJECTS.length - 1? setDisplayedIndex(0): setDisplayedIndex(displayedIndex + 1);
    }
    const selectPrevious = () => {
        displayedIndex === 0? setDisplayedIndex(PROJECTS.length - 1): setDisplayedIndex(displayedIndex - 1);
    }
    return (
        <section id="project-display">
            <h2>HERE ARE SOME OF MY PROJECTS</h2>
            <div className="section-container">
                <div className="arrow-left" onClick={() => selectPrevious()}></div>
                <div id="display-container">
                    <div id="display-names-container" className="sub-wrapper">
                        {
                            PROJECTS.map(project => {
                                return <button 
                                className={project.id === 0?"project-button selected":"project-button"}
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
                    <div id="displayed-project">
                        <img src={PROJECTS[displayedIndex].imgSrc} alt="a picture of my project"></img>
                        <div>
                            <h3>{PROJECTS[displayedIndex].name}</h3>
                            <p>{PROJECTS[displayedIndex].description}</p>
                        </div>
                    </div>
                </div>
                <div className="arrow-right" onClick={() => selectNext()}></div>
            </div>
        </section>
    )
}
export default ProjectDisplay;