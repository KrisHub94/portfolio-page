import ICONS from "../../constants/icons";

const PROJECTS = [
    {
        id: 0,
        name: "Project 1",
        imgSrc: "https://placehold.co/600x400",
        description: "This is Project 1. It is named like that because it is the first project that i want to display.",
        techIcons: [ICONS.HTML, ICONS.CSS, ICONS.JAVASCRIPT, ICONS.REACTJS, ICONS.SPRING, ICONS.NODEJS, ICONS.POSTGRESQL],
    },
    {
        id: 1,
        name: "Project 2",
        imgSrc: "https://placehold.co/600x400",
        description: "This is the second project. It is really cool. Codecool.",
        techIcons: [],
    },
    {
        id: 2,
        name: "Project 3",
        imgSrc: "https://placehold.co/600x400",
        description: "Project 3 was very interesting because, like the other placeholder projects, I didn't actually make it.",
        techIcons: [],
    },
]

export default PROJECTS;