import React from 'react'
import '../App.css'
import { useAppContext } from './context/appContext.js'

const Favourites = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useAppContext()
  console.log('favourites are', favourites)

  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id)
    return boolean
  }
  return (
    <div className='favourites'>
      {favourites.length > 0 ? favourites.map((book) => (
        <div key={book.id} className='book'>
          <div><h4>{book.title}</h4></div>
          <div><img src={book.image_url} alt="#" /></div>
          {favouritesChecker(book.id) ? <button onClick={() => removeFromFavourites(book.id)}>Remove</button> : (<button onClick={() => addToFavourites(book)}>Add To Favourites</button>)}

        </div>
      )) : <h1>You don't have any favourite book yet</h1>}
    </div>
  )
}

export default Favourites