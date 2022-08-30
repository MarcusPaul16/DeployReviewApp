import React, { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    // calculate the average
    const calculateAverage = () =>{
        let sum = 0
        feedback.map((item) => {
            sum = sum + item.rating
        })
    return sum / feedback.length
    }
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(calculateAverage().toFixed(1)) ? 0 : calculateAverage().toFixed(1)}</h4>
    </div>
  )
}

export default FeedbackStats
