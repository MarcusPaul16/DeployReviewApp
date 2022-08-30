import FeedBackItem from "./FeedBackItem";
import {useContext} from 'react';
import FeedbackContext from "../Context/FeedbackContext";

function FeedBackList() {
    const {feedback} = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0){
        return <p>Not feedback yey</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedBackItem key={item.id} item={item}></FeedBackItem>
            ))}
        </div>
    )
}

export default FeedBackList;