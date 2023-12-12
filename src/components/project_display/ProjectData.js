import ICONS from "../../constants/icons";

const PROJECTS = [
    {
        id: 0,
        name: "Struggle",
        imgSrc: "/src/images/struggle.png",
        description: "The final and largest team project i participated in at the end of my training. It is a webpage where you can sign up and play a platformer game.",
        techIcons: [ICONS.HTML, ICONS.CSS, ICONS.JAVASCRIPT, ICONS.REACTJS, ICONS.SPRING, ICONS.NODEJS, ICONS.POSTGRESQL],
        gitHubLink: "https://github.com/egelix/Autumn",
    },
    {
        id: 1,
        name: "Mars Rover: Sprint 1",
        imgSrc: "/src/images/mars1.png",
        description: "This is the first in a series of team projects with multiple sprints. A Java program that creates a two-dimensional map and saves it to a file. The parameters can be random or specified.",
        techIcons: [ICONS.JAVA],
        gitHubLink: "https://github.com/CodecoolGlobal/mars-exploration-1-java-KrisHub94",
    },
    {
        id: 2,
        name: "Mars Rover: Sprint 2",
        imgSrc: "/src/images/mars2.png",
        description: "The second sprint of this team project. This Java program lets you input certain parameters for a map and it will check whether this map is 'habitable' or not.",
        techIcons: [ICONS.JAVA],
        gitHubLink: "https://github.com/CodecoolGlobal/mars-exploration-2-java-egelix",
    },
]

export default PROJECTS;