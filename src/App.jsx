/* 
Consegna:
Milestone 1
Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
*/

// Creo una lista di articoli in data/posts e la esporto e importo in app.jsx (potrò in un secondo momento creare un componente ad hoc per la visualizzazione degli articoli)
// Per visualizzare la lista creo una ul stilizzata e ciclo dentro l'array di articoli usando il metodo map() e isolo i titoli con la dot notation selezionando la proprietà title dell'oggetto post

/*
Consegna:
Milestone 2
Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.
*/

// Creo l'elemento form con l'input e il button per il submit
// Collego l'inserimento di un nuovo post allo stato del componente tramite l'attributo value di input
// Uso l'evento onChange per creare un legame bilaterale tra l'input e lo stato - a questo punto React associa un nuovo stato con ciò che noi abbiamo inserito nell'input al componente ma per aggiornare la lista abbiamo bisogno di associare un ulteriore cambiamento all'evento submit
// Quindi imposto una nuova associazione con lo stato questa volta direttamente alla lista di post, stabilendo come stato di partenza l'array iniziale
// Poi creo una funzione submitHandler che al verificarsi dell'evento submit clona l'array di partenza e richiama il setState per aggiornarla con il nuovo elemento inserito tramite form. Siccome dobbiamo utilizzare il dato inserito impediamo il refresh della pagina con il preventDefault
// Applichiamo il submitHandler all'evento onSubmit del form


import { useState } from 'react'
import postsList from '../data/postsList'

function App() {

  const [newPost, setNewPost] = useState('')
  /* const titles = []
  {
    postsList.forEach((post) => {
      titles.push(post.title)
      return titles
    })
    console.log(titles);
  } */
  {/* M2: imposto una nuova associazione con lo stato questa volta direttamente alla lista di post, stabilendo come stato di partenza l'array iniziale di articoli */ }
  const [posts, setPosts] = useState(postsList)

  {/* M2: creo una funzione submitHandler che al verificarsi dell'evento submit clona l'array di partenza (tramite l'operatore spread) e richiama il setState per aggiornarla con il nuovo elemento inserito tramite form. Siccome dobbiamo utilizzare il dato inserito impediamo il refresh della pagina con il preventDefault */ }

  function submitHandler(e) {
    e.preventDefault()
    setPosts([...posts, { title: newPost }])
  }


  return (
    <>
      <div className="container p-3">
        {/* M1: Creo una ul stilizzata */}
        <ul className="list-group">
          {/* M1: ciclo dentro l'array di post usando il metodo map() */}
          {
            posts.map((post, index) => {
              return (
                <li key={index} className="list-group-item">
                  {/* M1: isolo i titoli con la dot notation selezionando la proprietà title dell'oggetto post */}
                  {post.title}
                </li>
              )
            })
          }
        </ul>
        {/* M2: Creo l'elemento form con l'input e il button per il submit */}
        {/* M2: Applichiamo il submitHandler all'evento onSubmit del form */}
        <form className='mt-3' onSubmit={submitHandler}>
          {/* M2: Collego l'inserimento di un nuovo post allo stato del componente tramite l'attributo value di input */}
          {/* M2: Uso l'evento onChange per creare un legame bilaterale tra l'input e lo stato */}
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
