import ls from "../services/localStorage";
import ProjectItem from "./ProjectItem";

const ProjectList = ({allCards}) => {
    // hacer el map para pintar cada li
        const projects = allCards.map((eachCard, index) => {
            return <ProjectItem eachCard={eachCard} key={index} />
        })
    const test = ls.get('projectsLS', allCards);

    return (
        <section>
            <ul>{projects}</ul>
        </section>
    );
};

export default ProjectList;