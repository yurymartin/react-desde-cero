import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
    "price": 40,
    "profesor": "Beto Quiroga"
  },
  {
    "title": "Drupal desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg",
    "price": 30,
    "profesor": "Beto Quiroga"
  },
  {
    "title": "Go desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
    "price": 50,
    "profesor": "Alexys Lozada"
  },
  {
    "title": "HTML desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/blogs/smaller/03928ceb-64e7-4336-b18c-6f65a751de6e.jpg",
    "price": 10,
    "profesor": "Alvaro Felipe"
  },
]

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
      {
        cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/> )
      }
    </div>
  </>
)

export default App;
