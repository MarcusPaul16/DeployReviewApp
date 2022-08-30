import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(() =>{
      if (feedbackEdit.edit ===true){
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
        setBtnDisabled(false)
      }
    }, [feedbackEdit])

    const handleSubmit = (event) => {
      event.preventDefault()
      if (text.trim().length > 10){
        const newFeedback = {
          text,
          rating
          }
          if (feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
          }
          else{
            addFeedback(newFeedback)
            setText('')
          }
      }
    }

    const handleTextChange = (event) => {
        if (text === ''){
            setBtnDisabled(true)
            setMessage('')
        }
        else if (text !== '' & text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be 10 characters long')
        }
        else{
            setBtnDisabled(false)
            setMessage('')
        }
        setText(event.target.value)
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you rate your service with us?</h2>
        <RatingSelect select={(rating) => {setRating(rating)}}/>
        <div className="input-group">
            <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}></input>
            <Button type={'submit'} isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
