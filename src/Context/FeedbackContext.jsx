import { createContext, useState } from "react";

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1', 
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2', 
            rating: 5
        },
        {
            id: 3,
            text: 'This is feedback item 3', 
            rating: 6
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback,...feedback])
      }

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => id !== item.id))
      }
    const updateFeedback = (id, updItem) =>{
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem}: item))
    }
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
            {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext