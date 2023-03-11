import "../styles/App.scss";
import cover from "../images/cover.jpeg";
import user from "../images/user.svg";
import { useState } from "react";
import logoAdalab from "../images/logo-adalab.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import dataApi from '../services/api.js';


const element = <FontAwesomeIcon icon={faLaptopCode} />;
const defaultPhoto = "https://www.objetivobienestar.com/uploads/s1/60/09/29/hipatia-de-alejandri-a_1_780x462.jpeg"; 
const defaultImage = "https://mujeresconciencia.com/app/uploads/2015/06/sol.png"; 


function App() {
  // variables de estado

  const [data, setData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    photo: "",
    image: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageDemo, setErrorMessageDemo] = useState("");
  const [errorMessageRepo, setErrorMessageRepo] = useState("");
  const [errorMessageNameAuthor, setErrorMessageNameAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [cardMessage, setCardMessage] = useState (''); 

  //const patternName = new RegExp("^[a-zA-ZÀ-ÿ\s]{1,40}$");
  const patternName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  // Funciones handle
const handleClickCreateCard = (ev) => {
  ev.preventDefault();
 
  dataApi(data)
  .then(info => {
    // Esto es temporal:
    setData({ ...data, photo: defaultPhoto, image: defaultImage});
    if (info.success === true){
    setUrl(info.cardURL);
    setCardMessage ('Tu tarjeta ha sido creada');
     console.log (url);
    } else {
      setCardMessage ('Faltan datos');
    }
  });
}

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    if (inputName === "name") {
      setData({ ...data, name: inputValue });
      if (!inputValue) {
        setErrorMessage("*Campo requerido");
      } else {
        setErrorMessage(" ");
      }
    }
    if (inputName === "slogan") {
      setData({ ...data, slogan: inputValue });
    }
    if (inputName === "technologies") {
      setData({ ...data, technologies: inputValue });
    }
    if (inputName === "repo") {
      setData({ ...data, repo: inputValue });
      if (!inputValue) {
        setErrorMessageRepo("*Campo requerido");
      } else {
        setErrorMessageRepo(" ");
      }
    }
    if (inputName === "demo") {
      setData({ ...data, demo: inputValue });
      if (!inputValue) {
        setErrorMessageDemo("*Campo requerido");
      } else {
        setErrorMessageDemo(" ");
      }
    }
    if (inputName === "desc") {
      setData({ ...data, desc: inputValue });
    }

    if (inputName === "autor") {
      if (!inputValue) {
        setErrorMessageNameAuthor("*Campo requerido");
        setData({ ...data, autor: inputValue });
      }else if (patternName.test(inputValue)) {
        setData({ ...data, autor: inputValue });
        setErrorMessageNameAuthor(" ");
      }else if (!patternName.test(inputValue)){
        setErrorMessageNameAuthor("*Introducir solo letras");
      }
    }

    if (inputName === "job") {
      setData({ ...data, job: inputValue });
    }
    if (inputName === "photo") {
      setData({ ...data, photo: inputValue });
    }
    if (inputName === "image") {
      setData({ ...data, image: inputValue });
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        {/*   Header + Hero  -  Virginia */}
        <header className='header'>
          <div className='icon'>
            <a className='header__icon'>{element}</a>
            <p className='text'>Proyectos Molones</p>
          </div>
          <img className='logo-adalab' src={logoAdalab} />
        </header>
        <main className='main'>
          <section className='preview'>
            <img className='image' src={data.image || cover} alt='' />

            {/*   Card -  Almu */}
            <section className='author'>
              <section className='author__ip'>
                <p className='author__ip__subtitle'>Personal Project Card</p>
                {/* <hr className='author__ip__line' /> */}

                <h2 className='author__ip__title'>
                  {data.name || "Elegant Workspace"}
                </h2>
                <p className='author__ip__slogan'>
                  {data.slogan || "Diseños Exclusivos"}
                </p>
                <p className='author__ip__desc'>
                  {" "}
                  {data.desc ||
                    `Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Amet faucibus commodo
                    tellus lectus lobortis.`}
                </p>
                <section className='author__ip__technologies'>
                  <p className='author__ip__text'>
                    {data.technologies || "React JS, MongoDB"}
                  </p>
                </section>
              </section>

              <section className='author__ia'>
                <img
                  className='author__ia__image'
                  src={data.photo || user}
                  alt=''
                />
                <p className='author__ia__job'>
                  {data.job || "Full Stack Developer"}
                </p>
                <p className='author__ia__name'>
                  {data.autor || "Emmelie Björklund"}
                </p>
              </section>
            </section>
          </section>

          {/*   Form -  Patricia */}
          <section className='form'>
            <h2 className='form__title'>Información</h2>

            <section className='form__ask-info'>
              <p className='form__ask-info__subtitle'>
                Cuéntanos sobre el proyecto
              </p>
              <hr className='form__ask-info__line' />
            </section>
            <form onSubmit={handleSubmit}>
              <fieldset className='project'>
                <input
                  required
                  className='project__input'
                  type='text'
                  placeholder='Nombre del proyecto'
                  name='name'
                  id='name'
                  value={data.name}
                  onChange={handleInput}
                />
                <p>{errorMessage}</p>
                <input
                  className='project__input'
                  type='text'
                  name='slogan'
                  id='slogan'
                  placeholder='Slogan'
                  value={data.slogan}
                  onChange={handleInput}
                />
                <input
                  required
                  className='project__input'
                  type='text'
                  name='repo'
                  id='repo'
                  placeholder='Repo'
                  value={data.repo}
                  onChange={handleInput}
                />
                <p>{errorMessageRepo}</p>
                <input
                  required
                  className='project__input'
                  type='text'
                  placeholder='Demo'
                  name='demo'
                  id='demo'
                  value={data.demo}
                  onChange={handleInput}
                />
                <p>{errorMessageDemo}</p>
                <input
                  className='project__input'
                  type='text'
                  placeholder='Tecnologías'
                  name='technologies'
                  id='technologies'
                  value={data.technologies}
                  onChange={handleInput}
                />
                <textarea
                  className='project__textarea'
                  type='text'
                  placeholder='Descripción'
                  name='desc'
                  id='desc'
                  value={data.desc}
                  onChange={handleInput}></textarea>
              </fieldset>

              <section className='ask-info__autor'>
                <p className='ask-info__autor__subtitle'>
                  Cuéntanos sobre la autora
                </p>
                <hr className='ask-info__autor__line' />
              </section>

              <fieldset className='autor'>
                <input
                  required
                  className='autor__input'
                  type='text'
                  placeholder='Nombre'
                  name='autor'
                  id='autor'
                  value={data.autor}
                  onChange={handleInput}
                />
                <p>{errorMessageNameAuthor}</p>
                <input
                  className='autor__input'
                  type='text'
                  placeholder='Trabajo'
                  name='job'
                  id='job'
                  value={data.job}
                  onChange={handleInput}
                />
              </fieldset>

              <section className='buttons-img'>
                <button className='buttons-img__btn'>
                  Subir foto de proyecto
                </button>
                <button className='buttons-img__btn'>
                  Subir foto de autora
                </button>
              </section>
              <section className='buttons-img'>
                <button
                  className='buttons-img__btn-large'
                  onClick={handleClickCreateCard}>
                  Crear Tarjeta
                </button>
              </section>
            </form>

            <section className='card'>
              <span className=''></span>
              <a href={`${url}`} className='card' target='_blank' rel='noreferrer'onSubmit={handleSubmit}>
              {cardMessage}
              </a>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
