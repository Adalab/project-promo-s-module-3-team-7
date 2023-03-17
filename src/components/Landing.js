import Card from "./Card"

const Landing = () => {
    return (
        <div className="landing">
            <h1 className="landing__title">
                Proyectos Molones
            </h1>
            <p className="landing__subtitle">
                Escaparate en línea para recoger ideas a través de la tecnología.
            </p>
            <div className="landing__container">
                <button className="landing__container__button-new-project">
                    Nuevo Proyecto
                </button>
                <button className="landing__container__button-view-projects">
                    Ver proyectos
                </button>
            </div>
        </div>
    )
}

export default Landing