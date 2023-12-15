import ICONS from "../../constants/icons";
import strugglePic from "../../images/struggle.png";
import mars1Pic from "../../images/mars1.png";
import mars2Pic from "../../images/mars2.png";

const PROJECTS = [
    {
        id: 0,
        name: "Struggle",
        imgSrc: strugglePic,
        description: "The final and largest team project I participated in at the end of my training. It is a webpage where you can sign up and play a platformer game.",
        techIcons: [ICONS.HTML, ICONS.CSS, ICONS.JAVASCRIPT, ICONS.REACTJS, ICONS.JAVA, ICONS.SPRING, ICONS.NODEJS, ICONS.POSTGRESQL],
        gitHubLink: "https://github.com/egelix/Autumn",
    },
    {
        id: 1,
        name: "Mars Rover: Sprint 1",
        imgSrc: mars1Pic,
        description: "This is the first in a series of team projects with multiple sprints. A Java program that creates a two-dimensional map and saves it to a file. The parameters can be random or specified.",
        techIcons: [ICONS.JAVA],
        gitHubLink: "https://github.com/CodecoolGlobal/mars-exploration-1-java-KrisHub94",
    },
    {
        id: 2,
        name: "Mars Rover: Sprint 2",
        imgSrc: mars2Pic,
        description: "The second sprint of this team project. This Java program lets you input certain parameters for a map and it will check whether this map is 'habitable' or not.",
        techIcons: [ICONS.JAVA],
        gitHubLink: "https://github.com/CodecoolGlobal/mars-exploration-2-java-egelix",
    },
]

export default PROJECTS;