import React, { useState, useEffect } from 'react'
import Form from './Form'
import axios from 'axios'

const quotesURL = 'http://localhost:3333/api/quotes'

const initialFormState = {
  id: '',
  text: '',
  author: '',
}

export default function Container() {
  ////////////// SLICES OF STATE //////////////

  const [quotes, setQuotes] = useState([])
  const [formValues, setFormValues] = useState(initialFormState)

  ////////////// NETWORK HELPERS //////////////

  const getQuotes = () => {

    console.log(`TASK 1- Use 'axios' or 'fetch' to [GET] a list of quotes
      from 'http://localhost:3333/api/quotes'. On success, the quotes
      in the response body should be set as the 'quotes' slice of state.
      On error, 'handleError' should be called.`)

    axios.get(quotesURL)
      .then(res => {
        setQuotes(quotes => quotes.concat(res.data))
      })
      .catch(err => {
        handleError(err)
      })
  }

  const postQuote = ({ text, author }) => {

    console.log(`TASK 2- Use 'axios' or 'fetch' to [POST] a new quote
    in 'http://localhost:3333/api/quotes'. On success, the new quote
    in the response body should be added to the 'quotes' slice of state.
    On error, 'handleError' should be called. Finally, the form should be reset.`)


    axios.post(quotesURL, {
      text: text, author: author
    })
      .then(res => {
        setQuotes(quotes => quotes.concat(res.data))
        resetForm()
      })
      .catch(err => {
        handleError(err)
      })
  }

  const putQuote = ({ id, text, author }) => {

    console.log(`TASK 3- Use 'axios' or 'fetch' to [PUT] an existing quote
    in 'http://localhost:3333/api/quotes/:id'. On success, the updated quote
    in the response body should be used to replace the old version of the quote in 'quotes'.
    On error, 'handleError' should be called. Finally, the form should be reset.`)

    axios.put(quotesURL + '/' + id, {
      text: text, author: author
    })
      .then(res => {
        let updatedQuotes = quotes.map(quote => {
          if (quote.id === id) {
            quote.text = res.data.text
            quote.author = res.data.author
          }
          return quote
        })
        setQuotes(updatedQuotes)
        resetForm()
      })
      .catch(err => {
        handleError(err)
      })
  }

  const deleteQuote = (id) => {

    console.log(`TASK 4- Use 'axios' or 'fetch' to [DELETE] an existing quote
      in 'http://localhost:3333/api/quotes/:id'. On success, the deleted quote
      should be removed from the 'quotes' slice of state'.
      On error, 'handleError' should be called. Finally, the form should be reset.`)

    axios.delete(quotesURL + '/' + id)
      .then(res => {
        setQuotes(quotes => quotes.filter(q => q.id !== res.data))
        resetForm()
      })
      .catch(err => {
        handleError(err)
      })
  }

  ////////////// OTHER HELPERS //////////////
  const editQuote = (id) => {

    console.log(`TASK 5- This helper should find inside 'quotes' the quote with the given 'id'.
    Use the 'id', 'text' and 'author' properties of this quote to populate the corresponding
    fields of the 'formValues' slice of state.`)

    const quote = quotes.find(quote => quote.id == id)

    setFormValues({
      id: quote.id,
      text: quote.text,
      author: quote.author
    })
  }

  const handleError = err => { debugger } // eslint-disable-line

  const resetForm = () => setFormValues(initialFormState)

  ////////////// SIDE EFFECTS //////////////

  useEffect(() => getQuotes(), [])

  return (
    <div className='container'>
      <h3>Quotes</h3>
      <ul>
        {
          quotes.map((quote, i) => (
            <li key={quote.id}>
              <div>{quote.text} ({quote.author})</div>
              <button onClick={() => editQuote(quote.id)}>Edit</button>
              <button onClick={() => deleteQuote(quote.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <Form
        values={formValues}
        setValues={setFormValues}
        submitHandlers={{ postQuote, putQuote }}
        reset={resetForm}
      />
    </div>

  )

}
