import { useState } from "react";
import dataApi from '../services/api.js';
import Header from './Header';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preview  from "./Preview";
import Form from "./Form";
//import {Route, Routes} from 'react-router-dom';
//import Landing from "./Landing";
import Footer from "./Footer.js";
import ls from '../services/localStorage'; 




const defaultPhoto = "https://www.cientificascasio.com/assets/img/cientificas/related/ada-lovelace.png"; 
const defaultImage = "https://mujeresconciencia.com/app/uploads/2015/06/sol.png"; 


function CreateProject() {
  // variables de estado

  // const [data, setData] = useState({
  //   name: "",
  //   slogan: "",
  //   technologies: "",
  //   repo: "",
  //   demo: "",
  //   desc: "",
  //   autor: "",
  //   job: "",
  //   photo: "",
  //   image: "",
  // });

    const [data, setData] = useState(ls.get ('lastCard',{
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
  }));

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

  const [errorMessageCard, setErrorMessageCard] = useState('')
  const [url, setUrl] = useState("");
  const [cardMessage, setCardMessage] = useState (''); 
  const patternName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const [allCards, setAllCards] = useState (ls.get('projectsLS', [])); 
  

  // Funciones handle
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
      // Esto es temporal:
    setData({ ...data, image: defaultImage, photo: defaultPhoto});
    console.log (url);
    console.log (data); 
 
    dataApi(data)
      .then(info => {
        if (info.success === true) {
          setUrl(info.cardURL);
          setCardMessage ('Tu tarjeta ha sido creada');
          setErrorMessageCard('')
          setAllCards([...allCards, data]);
          // Añado el nuevo proy
          ls.set ('lastCard', data); 
          ls.set('projectsLS', allCards);
          // Vuelvo a guardar en el LS
          console.log (url);
          console.log(allCards); 
           


        } else {
          setCardMessage ('');
          setErrorMessageCard ('Faltan datos.Por favor rellena todos los campos');
        }
        
    });
    
  };

     
  const handleInput = (inputValue, inputName) => {
    setData({...data, [inputName]: inputValue}); 
    
    if (inputName === "name") {
      validateRequired (inputValue,setErrorMessage)
    }
    if (inputName === "slogan") {
      validateRequired (inputValue,setErrorMessage)
    }
    if (inputName === "technologies") {
      validateRequired (inputValue,setErrorMessage)
    }
    if (inputName === "repo") {
      validateRequired (inputValue,setErrorMessage)
      // añadir otra validacion
    }
    if (inputName === "demo") {
      validateRequired (inputValue,setErrorMessage)
    }
    if (inputName === "desc") {
      validateRequired (inputValue,setErrorMessage)
    }
    if (inputName === "autor") {
      validateRequired (inputValue,setErrorMessage)
      if (patternName.test(inputValue)) {
        setErrorMessage(" ");
      } else if (!patternName.test(inputValue)){
        setErrorMessage("* Introducir solo letras");
      }
    }
    if (inputName === "job") {
      validateRequired (inputValue,setErrorMessage)
    }
    if (inputName === "photo") {
      validateRequired (inputValue,setErrorMessage)
    }
    if (inputName === "image") {
      validateRequired (inputValue,setErrorMessage)
    }
  };

   
  const validateRequired = (inputValue,setError) => {
    if (!inputValue) {
      return setError("* Campo requerido");
    } else {
      return setError(" ");
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
        <Footer />
      </div>
    </div>
  );
};

export default CreateProject;