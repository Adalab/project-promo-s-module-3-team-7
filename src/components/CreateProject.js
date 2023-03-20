import { useState } from "react";
import React from "react";
import dataApi from "../services/api.js";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preview from "./Preview";
import Form from "./Form";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Footer from "./Footer.js";
import GetAvatar from "./GetAvatar";

function CreateProject() {
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

  const [errorMessageCard, setErrorMessageCard] = useState("");

  const [url, setUrl] = useState("");
  const [cardMessage, setCardMessage] = useState("");

  const patternName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const patternDemo =
    /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  const updateImages = (avatar) => {
    setData({ ...data, image: avatar });
  };
  const updatePhoto = (avatar) => {
    setData({ ...data, photo: avatar });
  };

  // Funciones handle
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();

    setData({ ...data });

    dataApi(data).then((info) => {
      if (info.success === true) {
        setUrl(info.cardURL);
        setCardMessage("Tu tarjeta ha sido creada");
        setErrorMessageCard("");

        // Cojo datos de LS

        // Añado el nuevo proy
        //ls.set('projectsLS', data);
        // Vuelvo a guardar en el LS

        console.log(url);
      } else {
        setCardMessage("");
        setErrorMessageCard("Faltan datos, por favor rellena todos los campos");
      }
    });
  };

  const updateAvatar = (avatar) => {
    setData({ ...data, photo: avatar });
  };

  const handleInput = (inputValue, inputName) => {
    setData({ ...data, [inputName]: inputValue });
    console.log(inputName, inputValue);

    if (inputName === "name") {
      validateRequired(inputValue, setErrorMessage, "name");
    }
    if (inputName === "slogan") {
      validateRequired(inputValue, setErrorMessage, "slogan");
    }

    if (inputName === "technologies") {
      validateRequired(inputValue, setErrorMessage, "technologies");
    }
    if (inputName === "repo") {
      if (inputValue.length > 0 && !patternDemo.test(inputValue)) {
        const clonedErrorMessages = { ...errorMessage };
        clonedErrorMessages.repo = "* Introducir el enlace";
        setErrorMessage(clonedErrorMessages);
      } else {
        validateRequired(inputValue, setErrorMessage, "repo");
      }
    }
    if (inputName === "demo") {
      if (inputValue.length > 0 && !patternDemo.test(inputValue)) {
        const clonedErrorMessages = { ...errorMessage };
        clonedErrorMessages.demo = "* Introducir el enlace";
        setErrorMessage(clonedErrorMessages);
      } else {
        validateRequired(inputValue, setErrorMessage, "demo");
      }
    }
    if (inputName === "desc") {
      validateRequired(inputValue, setErrorMessage, "desc");
    }
    if (inputName === "autor") {
      if (inputValue.length > 0 && !patternName.test(inputValue)) {
        const clonedErrorMessages = { ...errorMessage };
        clonedErrorMessages.autor = "* Introducir solo letras";
        setErrorMessage(clonedErrorMessages);
      } else {
        validateRequired(inputValue, setErrorMessage, "autor");
      }
    }
    if (inputName === "job") {
      validateRequired(inputValue, setErrorMessage, "job");
    }
    if (inputName === "photo") {
      validateRequired(inputValue, setErrorMessage);
    }
    if (inputName === "image") {
      validateRequired(inputValue, setErrorMessage);
    }
  };

  const validateRequired = (inputValue, setError, field) => {
    if (!inputValue) {
      const clonedErrorMessages = { ...errorMessage };
      clonedErrorMessages[field] = "* Campo requerido";
      setError(clonedErrorMessages);
    } else {
      setError(" ");
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <Header />

        <main className='main'>
          <Preview data={data} />
          <Routes>
            <Route path='getAvatar' element={<GetAvatar />}></Route>
          </Routes>

          {/*   Form -  Patricia */}
          <Form
            handleInput={handleInput}
            data={data}
            errorMessage={errorMessage}
            url={url}
            cardMessage={cardMessage}
            handleClickCreateCard={handleClickCreateCard}
            errorMessageCard={errorMessageCard}
            updateImages={updateImages}
            updatePhoto={updatePhoto}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default CreateProject;
