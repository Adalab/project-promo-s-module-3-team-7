import ls from "../services/localStorage";
import "../styles/layout/ProjectList.scss";
import ProjectItem from "./ProjectItem";

const ProjectList = ({allCards}) => {

    // Function to delete a selected card
    function deleteCard(ev){
        ev.preventDefault();
        const idSelected = ev.currentTarget.id;
        const indexCard = allCards.findIndex(oneCard => oneCard.id === idSelected); 
        allCards.splice(indexCard, 1);
    }

    // hacer el map para pintar cada li
        const projects = allCards.map((eachCard, index) => {
            return <ProjectItem eachCard={eachCard} key={index} />
        })
    const test = ls.get('projectsLS', allCards);

    return (
        <section className="project__list">
            <ul>{projects}</ul>
        </section>
    );
};

export default ProjectList;