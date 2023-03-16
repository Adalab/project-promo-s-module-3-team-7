import {Link} from 'react-router-dom'; 
import Header from './Header';

function Landing (){
    // Recojo la lista de proy del LS
    //const [allProyects, setAllProyects] = useState(ls.get('projectsLS', []));

    // Guardo en una varstate para hacer el map
    return (
        <div className='container'>
            <Header/>
            <p>Holi Landing</p>

            <Link to="/create">Nuevo Proyecto</Link>
            
        </div>
    );
}

export default Landing; 