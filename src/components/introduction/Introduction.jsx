import "./Introduction.css";

const Introduction = () => {
    return (
        <section id="introduction">
            <div>
                <h1 className="anim-slide-in-left">KRISTIAN HUBER</h1>
                <h2 className="anim-slide-in-left anim-delay-short">Full Stack Software Developer</h2>
            </div>
            <div className="text-wrapper">
                <p className="anim-fade-in">
                    Welcome to my webpage! I'm Kristian, a recently trained Full Stack Software Developer located in Vienna, Austria.
                    During my training I gained proficiency in HTML, CSS, JavaScript and Java, while using React for frontend-development and Spring Boot for backend solutions.
                </p>
                <p className="anim-fade-in anim-delay-short">
                    Though my professional journey is in its early stages, I have collaborated on several engaging team projects during my training, which honed my abilitiy
                    to work in a collaborative environment. <br/>
                    What I like most about software development is the ability to construct logical structures that efficiently tackle complex problems.
                </p>
            </div>
        </section>
    )
}
export default Introduction;