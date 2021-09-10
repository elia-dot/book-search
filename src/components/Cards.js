import React from 'react'
import Card from './Card'

const Cards = ({results}) => {
    return (
        <div className = "cards-grid container">
            {results.map(book => (<Card book = {book} key ={book.id}/>))}
        </div>
    )
}

export default Cards
