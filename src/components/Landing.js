import "../styles/layout/Landing.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";
import { useState } from "react";
import ls from "../services/localStorage";

function Landing({allCards}) {
     
    return (
        <>
        <div className="container__landing">
            <Header />
            <main className="main__landing">
                <div className="main__landing__container">
                    <h1 className="main__landing__container__title">
                        Proyectos Molones
                    </h1>
                    <p className="main__landing__container__subtitle">
                        Escaparate en línea para recoger ideas a través de la tecnología.
                    </p>
                    <div className="main__landing__container__buttons">
                        <Link to="/create">
                            <button className="main__landing__container__buttons__button-new-project">
                                Nuevo Proyecto
                            </button>
                        </Link>
                        <button className="main__landing__container__buttons__button-view-projects">
                            Ver proyectos
                        </button>
                    </div>
                </div>
                <ProjectList allCards={allCards} />
            </main>
        </div>
            <Footer />
        
        </>
    );
};

export default Landing;