import React from 'react'
import '../App.css'
import { API_URL } from '../API.js'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useAppContext } from './context/appContext.js'
import { useNavigate } from 'react-router-dom'

const BooksList = () => {

    const [books, setBooks] = useState([])

    const navigate=useNavigate()

    const {favourites, addToFavourites, removeFromFavourites}=useAppContext()
    console.log('favourites are',favourites)

    const favouritesChecker=(id)=>{
        const boolean=favourites.some((book)=>book.id===id)
        return boolean
    }

    useEffect(() => {
        axios.get(API_URL).then(res => {
            console.log(res.data)
            setBooks(res?.data)
        }).catch(err => console.log(err.message))
    }, [])

    return (
        <>
        <h3 className="heading">Book List 2023</h3>
        <div className='books-list'>
            {books?.map((book) => (
                <div key={book?.id} className='book'>
                    <div className='book-title'><h4>{book?.title}</h4></div>
                    <div><img src={book?.image_url} alt="#" onClick={()=>navigate(`/books/${book?.id}`)}/></div>
                    {favouritesChecker(book?.id)?<button onClick={()=>removeFromFavourites(book?.id)}>Remove To Favourites</button>:(<button onClick={()=>addToFavourites(book)}>Add To Favourites</button>)}
                    
                </div>
            ))}
        </div>
        </>
       
    )
}

export default BooksList