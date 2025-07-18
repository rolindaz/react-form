/* Consegna:

Milestone 1
Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo. */

// Creo una lista di articoli in data/posts e la esporto e importo in app.jsx (potrò in un secondo momento creare un componente ad hoc per la visualizzazione degli articoli)
// Per visualizzare la lista creo una ul stilizzata e ciclo dentro l'array di articoli usando il metodo map() e isolo i titoli con la dot notation selezionando la proprietà title dell'oggetto post

import { useState } from 'react'
import posts from '../data/posts'

function App() {

  return (
    <>
      <div className="container p-3">
        <ul className="list-group">
          {
            posts.map((post) => {
              return (
                <li className="list-group-item">
                  {post.title}
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
