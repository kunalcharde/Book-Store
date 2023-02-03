import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { BOOK_DETAILS_URL } from '../API'

const BooksDetails = () => {
  const [book, setBook] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
      .then(res => {
        setBook(res.data)
      }).catch(err => console.log(err))
  }, [id])
  return (
    <div className='book-details'>
      <div className='book=image'>
        <img src={book?.image_url} alt="#" />
      </div>
      <div className='book-description'>
        <h2>Tittle : <span>{book?.title}</span></h2>
        <h2>Description :</h2>
        <p>{book?.description}</p>
        <h2>Authors :</h2>
        <p>{book?.authors}</p>
        <h2>Genres :</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  )
}

export default BooksDetails