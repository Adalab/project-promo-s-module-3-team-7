import "../styles/layout/Form.scss";
import Button from "./Button";

function Form({ handleInput, data, errorMessage, url, cardMessage }) {
  const handleInputChange = (ev) => {
    handleInput(ev.target.value, ev.target.name);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className='form'>
      <h2 className='form__title'>Información</h2>

      <section className='form__ask-info'>
        <p className='form__ask-info__subtitle'>Cuéntanos sobre el proyecto</p>
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
            onChange={handleInputChange}
          />
          <p className='errorMessage'>{errorMessage.name}</p>
          <input
            className='project__input'
            type='text'
            name='slogan'
            id='slogan'
            placeholder='Slogan'
            value={data.slogan}
            onChange={handleInput}
          />
          <p className='errorMessage'>{errorMessage.slogan}</p>
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
          <p className='errorMessage'>{errorMessage.repo}</p>
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
          <p className='errorMessage'>{errorMessage.demo}</p>
          <input
            className='project__input'
            type='text'
            placeholder='Tecnologías'
            name='technologies'
            id='technologies'
            value={data.technologies}
            onChange={handleInput}
          />
          <p className='errorMessage'>{errorMessage.tech}</p>
          <textarea
            className='project__textarea'
            type='text'
            placeholder='Descripción'
            name='desc'
            id='desc'
            value={data.desc}
            onChange={handleInput}></textarea>
          <p className='errorMessage'>{errorMessage.desc}</p>
        </fieldset>

        <section className='ask-info__autor'>
          <p className='ask-info__autor__subtitle'>Cuéntanos sobre la autora</p>
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
          <p className='errorMessage'>{errorMessage.autor}</p>
          <input
            className='autor__input'
            type='text'
            placeholder='Trabajo'
            name='job'
            id='job'
            value={data.job}
            onChange={handleInput}
          />
          <p className='errorMessage'>{errorMessage.job}</p>
        </fieldset>

        <section className='buttons-img'>
          <Button className='buttons-img__btn' text='Subir foto de proyecto' />
          {/*lifting */}
          <Button className='buttons-img__btn' text='Subir foto de autora' />
        </section>
        <section className='buttons-img'>
          <Button
            className='buttons-img__btn-large'
            text='Crear Tarjeta'
            // onClick={handleClickCreateCard}
          />

          <p className='errorMessage'>{errorMessage.photo}</p>
          <p className='errorMessage'>{errorMessage.image}</p>
        </section>
        <section className='card'>
          <span className=''></span>
          <a
            href={`${url}`}
            className='card'
            target='_blank'
            rel='noreferrer'
            onSubmit={handleSubmit}>
            {cardMessage}
          </a>
        </section>
      </form>
    </section>
  );
}

export default Form;
