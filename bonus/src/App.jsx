/* 
Consegna:
Bonus 1
Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
*/

// Devo aggiungere in pagina l'icona generandola insieme al list item nel ciclo map
// Creo una funzione postRemover che elimina un post in base all'indice, genera un nuovo array in cui quell'indice non è incluso grazie a filter e richiama il setState per aggiornare la lista
// Richiamo il postRemover nell'evento onClick del bottone contenente l'icona

/*
Consegna:
Bonus 2
Implementare la funzionalità di modifica del titolo di un post.
*/

// Aggiungo in pagina l'icona per la modifica generandola insieme al list item nel ciclo map
// Creo una funzione postEditor che modifica un post in base all'indice, genera un nuovo array in cui quell'indice non è incluso grazie a filter e richiama il setState per aggiornare la lista


import { useState } from 'react'
import postsList from '../data/postsList'

function App() {

  const [newPost, setNewPost] = useState('')
  const [posts, setPosts] = useState(postsList)

  function submitHandler(e) {
    e.preventDefault()
    setPosts([...posts, { title: newPost }])
  }

  {/* B1: Creo una funzione che elimina un post in base all'indice, genera un nuovo array in cui quell'indice non è incluso grazie a filter e richiama il setState per aggiornare la lista */ }

  const postRemover = i => {
    const updatedPosts = posts.filter((post, index) => {
      return index !== i
    })
    setPosts(updatedPosts)
  }


  return (
    <>
      <div className="container p-3">
        <ul className="list-group">
          {
            posts.map((post, i) => {
              return (
                <>
                  <li key={i} className="list-group-item d-flex justify-content-between">
                    <span>
                      {post.title}
                    </span>
                    <div>
                      <button className="border-0 bg-transparent">
                        {/* B2: Aggiungo in pagina l'icona per la modifica generandola insieme al list item nel ciclo map */}
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      {/* B1: Richiamo il postRemover nell'evento onClick del bottone contenente l'icona */}
                      <button className='border-0 bg-transparent ms-2' onClick={() => { postRemover(i) }}>
                        {/* B1: Aggiungo in pagina l'icona generandola insieme al list item nel ciclo map */}
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </div>
                  </li>
                </>
              )
            })
          }
        </ul>
        <form className='mt-3' onSubmit={submitHandler}>
          <input
            className='form-control my-2'
            placeholder='Insert new post title'
            type="text"
            value={newPost}
            onChange={e => setNewPost(e.target.value)}
          />
          <button type="submit" className='btn btn-primary'>
            Add
          </button>
        </form>
      </div>
    </>
  )
}

export default App
