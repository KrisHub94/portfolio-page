import "./ProjectDisplay.css";

const ProjectDisplay = () => {
    return (
        <section id="project-display">
            <h2>HERE ARE SOME OF MY PROJECTS</h2>
            <div className="section-container">
                <div className="arrow-left"></div>
                <div id="display-container">
                    <div id="display-names-container"></div>
                </div>
                <div className="arrow-right"></div>
            </div>
        </section>
    )
}
export default ProjectDisplay;