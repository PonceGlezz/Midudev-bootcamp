import './App.css';
import Mensaje from './Mensaje';

const Description = () =>{
    return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () =>{
    return ( //Llamado de componentes dentro de un componente
        <div className="App">
            <Mensaje message='Estamos Trabajando' />
            <Mensaje message='En un curso' />
            <Mensaje message='De React' />
            <Description />
        </div>
    )
}

export default App;
