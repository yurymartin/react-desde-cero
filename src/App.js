import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://www.ecestaticos.com/imagestatic/clipping/3b8/6fa/3b86fad7b3059474fad79627e897ea88/como-singapur-ha-conseguido-ser-uno-de-los-paises-mas-limpios-del-mundo.jpg?mtime=1579565836en.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDteam</p>
            <p> Tu Futuro te está esperando</p>
            <a href="https://ed.team" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </>
)

export default App;
