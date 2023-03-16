import {Link} from 'react-router-dom'; 
import Header from './Header';

function Landing (){
    return (
        <div className='container'>
            <Header/>
            <p>Holi Landing</p>
            
            <Link to="/create">Nuevo Proyecto</Link>
            
        </div>
    );
}

export default Landing; 