import "./ProjectDisplay.css";
import PROJECTS from "./ProjectData";
import { useState } from "react";

const ProjectDisplay = () => {
    const [displayedIndex, setDisplayedIndex] = useState(0);
    return (
        <section id="project-display">
            <h2>HERE ARE SOME OF MY PROJECTS</h2>
            <div className="section-container">
                <div className="arrow-left"></div>
                <div id="display-container">
                    <div id="display-names-container" className="sub-wrapper">
                        {
                            PROJECTS.map(project => {
                                return <button 
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
                <div className="arrow-right"></div>
            </div>
        </section>
    )
}
export default ProjectDisplay;