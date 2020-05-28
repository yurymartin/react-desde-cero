import React from 'react'

const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png" alt="Poster del curso" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                Programación orientada a objetos con Go
            </h3>
          <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                    <div className="circle img-container">
                    <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/952327c3-2bd9-41d1-819e-9b5d7eb84c13.jpg" alt="asdsad"/>
                    </div>
                </div>
                <span className="small">Alexys Lozada</span>
            </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
            </div>
        </div>
    </article>
)

export default Curso