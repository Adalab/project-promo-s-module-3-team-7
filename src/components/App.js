import "../styles/App.scss";
import { useState } from "react";
import dataApi from '../services/api.js';
import Header from './Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preview  from "./Preview";
import Form from "./Form";
import Footer from "./Footer";

const defaultPhoto = "https://www.cientificascasio.com/assets/img/cientificas/related/ada-lovelace.png"; 
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

  const [errorMessage, setErrorMessage] = useState({
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

  const [url, setUrl] = useState("");
  const [cardMessage, setCardMessage] = useState ('');
  const [errorMessageCard, setErrorMessageCard] = useState('');

  //const patternName = new RegExp("^[a-zA-ZÀ-ÿ\s]{1,40}$");
  const patternName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  // Funciones handle
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
      // Esto es temporal:
    setData({ ...data, photo: defaultPhoto, image: defaultImage});
    console.log (url);
 
    dataApi(data)
      .then(info => {
        if (info.success === true) {
          setUrl(info.cardURL);
          setCardMessage ('Tu tarjeta ha sido creada');
          setErrorMessageCard('')
          console.log (url);
        } else {
          setErrorMessageCard('Faltan datos, por favor rellena todos los campos');
        }
    });
  };

  

     
  const handleInput = (inputValue, inputName) => {
    setData({...data, [inputName]: inputValue}); 

    if (inputName === "name") {
      validateRequired (inputValue)
    }
    if (inputName === "slogan") {
      validateRequired (inputValue)
    }
    if (inputName === "technologies") {
      validateRequired (inputValue)
    }
    if (inputName === "repo") {
      validateRequired (inputValue)
      // añadir otra validacion
    }
    if (inputName === "demo") {
      validateRequired (inputValue)
    }
    if (inputName === "desc") {
      validateRequired (inputValue)
    }
    if (inputName === "autor") {
      validateRequired (inputValue)
      if (patternName.test(inputValue)) {
        setErrorMessage(" ");
      } else if (!patternName.test(inputValue)){
        setErrorMessage("* Introducir solo letras");
      }
    }
    if (inputName === "job") {
      validateRequired (inputValue)
    }
    if (inputName === "photo") {
      validateRequired (inputValue)
    }
    if (inputName === "image") {
      validateRequired (inputValue)
    }
  };


   
  const validateRequired = (inputValue) => {
    if (!inputValue) {
      return setErrorMessage("* Campo requerido");
    } else {
      return setErrorMessage(" ");
    }
  };


  return (
    <div className='App'>
      <div className='container'>

        <Header/>
         
        <main className='main'>
         <Preview 
         data={data}
         />

          {/*   Form -  Patricia */}
          <Form 
          handleInput={handleInput}
          data={data}
          errorMessage={errorMessage}
          url={url}
          cardMessage={cardMessage}
          handleClickCreateCard={handleClickCreateCard}
          errorMessageCard={errorMessageCard}
          />
        </main>
        
      </div>
      <Footer />
    </div>
  );
};

export default App;