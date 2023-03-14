import "../styles/App.scss";
import { useState } from "react";
import dataApi from '../services/api.js';
import Header from './Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preview  from "./Preview";
import Form from "./Form";




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
  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageSlogan, setErrorMessageSlogan] = useState("");
  const [errorMessageDemo, setErrorMessageDemo] = useState("");
  const [errorMessageRepo, setErrorMessageRepo] = useState("");
  const [errorMessageTech, setErrorMessageTech] = useState("");
  const [errorMessageDesc, setErrorMessageDesc] = useState("");
  const [errorMessageNameAuthor, setErrorMessageNameAuthor] = useState("");
  const [errorMessageJob, setErrorMessageJob] = useState("");
  const [errorMessageImage, setErrorMessageImage] = useState("");
  const [errorMessagePhoto, setErrorMessagePhoto] = useState("");
  const [url, setUrl] = useState("");
  const [cardMessage, setCardMessage] = useState (''); 

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
    setData ({...data, [inputName]: inputValue}); 

    if (inputName === "name") {
      validateRequired (inputValue,setErrorMessageName)
    }
    if (inputName === "slogan") {
      validateRequired (inputValue,setErrorMessageSlogan)
    }
    if (inputName === "technologies") {
      validateRequired (inputValue,setErrorMessageTech)
    }
    if (inputName === "repo") {
      validateRequired (inputValue,setErrorMessageRepo)
      // añadir otra validacion
    }
    if (inputName === "demo") {
      validateRequired (inputValue,setErrorMessageDemo)
    }
    if (inputName === "desc") {
      validateRequired (inputValue,setErrorMessageDesc)
    }

    if (inputName === "autor") {
      validateRequired (inputValue,setErrorMessageNameAuthor)
        
      if (patternName.test(inputValue)) {
       
        setErrorMessageNameAuthor(" ");
      }else if (!patternName.test(inputValue)){
        setErrorMessageNameAuthor("* Introducir solo letras");
      }
    }

    if (inputName === "job") {
      validateRequired (inputValue,setErrorMessageJob)
    }
    if (inputName === "photo") {
      validateRequired (inputValue,setErrorMessagePhoto)
    }
    if (inputName === "image") {
      validateRequired (inputValue,setErrorMessageImage)
    }
  };


   
   const validateRequired = (inputValue,setError) =>{
      if (!inputValue) {
        return setError("* Campo requerido");
      } else {
        return setError(" ");
      }
   }


  return (
    <div className='App'>
      <div className='container'>
        {/*   Header + Hero  -  Virginia */}
        <Header/>
         
        <main className='main'>
         <Preview/>

          {/*   Form -  Patricia */}
          <Form/>
        </main>
      </div>
    </div>
  );
}

export default App;
