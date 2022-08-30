import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedBackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={ () => {
                deleteFeedback(item.id)}
                 }>delete</button>
            <button className='edit' onClick={() => editFeedback(item)}>
                <p>edit</p>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedBackItem