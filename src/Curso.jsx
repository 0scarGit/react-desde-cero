import React, {Fragment} from 'react'

const Curso = () => (

 <article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="https://ed.team/sites/default/files/styles/large/public/courses/images/go_0.jpg?itok=k2amLhrN" alt="Poster del curso"/>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
      Programación orientada a objetos con Go
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://ed.team/sites/default/files/styles/thumbnail/public/pictures/2018-11/tioalexys.jpg?itok=7vDpJuSh" alt="tio alexis"/>
            </div>
        </div>
        <span className="small">Loco perez</span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="www.google.com">$ 20USD</a>
    </div>
  </div>
 </article>
)

export default Curso;