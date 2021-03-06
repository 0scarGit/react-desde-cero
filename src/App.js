import React, {Fragment} from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const App = () => (
    <>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="tu-imagen.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="www.google.com" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
<Curso/>
<Curso/>
<Curso/>
<Curso/>
</div>
 </>
)

export default App;

//Reglas JXS
//1: Toda etiqueta debe cerrarse
//2: Los componentes deben develver un solo elemento padre
//3: Apyarse de los Fragments cuando necesito devolver 2 elemntos
//4: Fragment =>  <>hijos<>
//5: img se cierra
//6: class => className
//7: for => htmlFor
//8: No se puede usar if, else, while
