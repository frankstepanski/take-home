import React from 'react'

export default function Form(props) {
  const {
    values,
    setValues,
    reset,
    submitHandlers: { postQuote, putQuote },
  } = props

  ////////////// EVENT HANDLERS //////////////
  const onCancel = evt => {

    console.log(`TASK 6- This should prevent the default behavior and
      reset the form to its original values.`)

      reset()
      evt.preventDefault()
  }

  const onSubmit = evt => {

    console.log(`TASK 7- This should prevent the default behavior and
    check whether 'values' contains a truthy id. If so, invoke the correct callback
    to [PUT] an existing quote, otherwise invoke the correct callback
    to [POST] a new quote.`)
    
      {values.id ? putQuote(values) : postQuote(values)}
      evt.preventDefault()
  }

  const onChange = evt => {

    console.log(`TASK 8- Obtain 'name' and 'value' from the target of the event,
    and utilize the correct callback to update the state of the form.`)

      setValues({
        ...values,
        [evt.target.name]: evt.target.value
      })
      evt.preventDefault()
  }

  ////////////// HELPER //////////////
  const isDisabled = () => {
    return !values.text.trim() || !values.author.trim()
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>{values.id ? 'Edit' : 'Add New'} Quote</h3>
      <input
        name='text'
        type='text'
        value={values.text}
        onChange={onChange}
        placeholder='Enter text'
      />
      <input
        name='author'
        type='text'
        value={values.author}
        onChange={onChange}
        placeholder='Enter author'
      />
      <button id='submitBtn' disabled={isDisabled()}>
        Submit {values.id ? 'Changes' : 'Quote'}
      </button>
      <button id='cancelBtn' onClick={onCancel}>Cancel</button>
    </form>
  )
}