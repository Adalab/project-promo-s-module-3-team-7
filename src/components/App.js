import '../styles/App.scss';
import cover from '../images/cover.jpeg';
import user from '../images/user.svg';
import { useState } from 'react';

function App() {
// variables de estado

const [name,setName] = useState (""); 
const [slogan, setSlogan] = useState (""); 
const [technologies, setTechnologies] = useState (""); 
const [repo, setRepo] = useState (""); 
const [demo, setDemo] = useState (""); 
const [desc, setDesc] = useState (""); 
const [autor, setAutor] = useState (""); 
const [job, setJob] = useState (""); 
const [photo, setPhoto] = useState (""); 
const [image, setImage] = useState (""); 

// Funciones handle
const handleInput = (ev) => {
  const inputValue = ev.target.value;
  const inputName = ev.target.name; 

   if (inputName === 'name'){
    setName(inputValue); 
   } 
  if (inputName === 'slogan'){
    setSlogan(inputValue); 
  } 
  if (inputName === 'technologies'){
    setTechnologies(inputValue); 
  } 
  if(inputName === 'repo'){
    setRepo(inputValue); 
  } 
  if(inputName === 'demo'){
    setDemo(inputValue); 
  } 
  if(inputName === 'desc'){
    setDesc(inputValue); 
  }
  if(inputName === 'autor'){
    setAutor(inputValue); 
  } 
  if(inputName === 'job'){
    setJob(inputValue); 
  }
  if(inputName === 'photo'){
    setPhoto(inputValue); 
  } 
  if(inputName === 'image'){
    setImage(inputValue); 
  }
}
// 
  return <div className="App">{
    // 
    <div className="container">
    {/*   Header + Hero  -  Virginia */}
      <header className="header">
      <a href=""><i class="fa-solid fa-laptop-code"></i></a>
        <p className="text">Proyectos Molones</p>
      </header>
      <main className="main">
        <section className="preview">
          <img className="image" src={image || cover} alt="" />

    {/*   Card -  Almu */}
          <section className="author">
            <section className="author__ip">
              <p className="author__ip__subtitle">Personal Project Card</p>
              <hr className="author__ip__line" />

              <h2 className="author__ip__title">{name || 'Elegant Workspace'}</h2>
              <p className="author__ip__slogan">{slogan ||'Diseños Exclusivos'}</p>
              <p className="author__ip__desc"> {desc || `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus? Voluptates at hic aliquam porro ad suscipit
              harum laboriosam saepe earum doloribus aperiam, ullam culpa
              accusantium placeat odit corrupti ipsum!`}
              </p>
              <section className="author__ip__technologies">
                <p className="author__ip__text">{technologies || 'React JS, MongoDB'}</p>
              </section>
            </section>

            <section className="author__ia">
              <img className="author__ia__image" src={photo || user} alt="" />
              <p className="author__ia__job">{job || 'Full Stack Developer'}</p>
              <p className="author__ia__name">{autor || 'Emmelie Björklund'}</p>
            </section>
          </section>
        </section>

{/*   Form -  Patricia */}
        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className='project'>
            <input
              className='input'
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
              value={name}
              onChange= {handleInput}
            />
            <input
              className='input'
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              value={slogan}
              onChange= {handleInput}
            />
            <input
              className='input'
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              value={repo}
              onChange= {handleInput}
            />
            <input
              className='input'
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              value={demo}
              onChange= {handleInput}
            />
            <input
              className='input'
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              value={technologies}
              onChange= {handleInput}
            />
            <textarea
              className='textarea'
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              value={desc}
              onChange= {handleInput}
              
            ></textarea>
          </fieldset>

          <section className='ask-info'>
            <p className='subtitle'>Cuéntanos sobre la autora</p>
            <hr className='line'/>
          </section>

          <fieldset className='autor'>
            <input
              className='input'
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
              value={autor}
              onChange= {handleInput}
            />
            <input
              className='input'
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              value={job}
              onChange= {handleInput}
            />
          </fieldset>

          <section className='buttons-img'>
            <button className='btn'>Subir foto de proyecto</button>
            <button className='btn'>Subir foto de autora</button>
          </section>
          <section className='buttons-img'>
            <button class="btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer"> </a>
          </section>
        </section>
      </main>
    </div>
  
    
    }</div>;
}

export default App;
