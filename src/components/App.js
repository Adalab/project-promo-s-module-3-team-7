import '../styles/App.scss';
import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';

function App() {
  return <div className="App">{
    
    <div class="container">
      <header class="header">
        <p class="text">Proyectos Molones</p>
      </header>
      <main class="main">
        <section class="preview">
          <img class="image" src={cover} alt="" />

          <section class="autor">
            <section class="info-project">
              <p class="subtitle">Personal Project Card</p>
              <hr class="line" />

              <h2 class="title">Elegant Workspace</h2>
              <p class="slogan">Diseños Exclusivos</p>
              <p class="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!
              </p>
              <section class="technologies">
                <p class="text">React JS, MongoDB</p>
              </section>
            </section>

            <section class="info-autor">
              <img class="image" src={user} alt="" />
              <p class="job">Full Stack Developer</p>
              <p class="name">Emmelie Björklund</p>
            </section>
          </section>
        </section>

        <section class="form">
          <h2 class="title">Información</h2>

          <section class="ask-info">
            <p class="subtitle">Cuéntanos sobre el proyecto</p>
            <hr class="line" />
          </section>

          <fieldset class="project">
            <input
              class="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
            />
            <input
              class="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            />
            <input
              class="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
            />
            <input
              class="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
            />
            <input
              class="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
            />
            <textarea
              class="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
            ></textarea>
          </fieldset>

          <section class="ask-info">
            <p class="subtitle">Cuéntanos sobre la autora</p>
            <hr class="line" />
          </section>

          <fieldset class="autor">
            <input
              class="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
            />
            <input
              class="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
            />
          </fieldset>

          <section class="buttons-img">
            <button class="btn">Subir foto de proyecto</button>
            <button class="btn">Subir foto de autora</button>
          </section>
          <section class="buttons-img">
            <button class="btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section>

          <section class="card">
            <span class=""> La tarjeta ha sido creada: </span>
            <a href="" class="" target="_blank" rel="noreferrer"> </a>
          </section>
        </section>
      </main>
    </div>
  
    
    }</div>;
}

export default App;
