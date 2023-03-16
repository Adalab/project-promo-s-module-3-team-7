import "../styles/App.scss";
import {Route, Routes} from 'react-router-dom';
import Landing from "./Landing";
import CreateProject from "./CreateProject"; 



function App() {
  return(
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/create" element={<CreateProject/>}></Route>
    </Routes>

  );
};

export default App;