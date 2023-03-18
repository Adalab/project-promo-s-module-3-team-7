import "../styles/App.scss";
import {Route, Routes} from 'react-router-dom';
import Landing from "./Landing";
import CreateProject from "./CreateProject"; 
import ls from '../services/localStorage';
import GetAvatar from "./GetAvatar";


function App() {

  //Aqui la variable de estado del lS
  // Lifting con el array de proyectos y la fx para modificar la variable de estado del lS 

  return(
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/create" element={<CreateProject />}></Route>
    </Routes>

  );
};

export default App;