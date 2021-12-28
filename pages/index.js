import React, { useRef, useState } from 'react'

import Link from 'next/link'

const HomePage = () => {
    const emailInputRef = useRef()
    const feedbackInputRef = useRef()

    const [feedbackData, setFeedbackData] = useState([])

    async function submitFormHandler(event) {
        event.preventDefault()

        const emailValue = emailInputRef.current.value
        const feedbackValue = feedbackInputRef.current.value

        const requestData = JSON.stringify({
            email: emailValue,
            text: feedbackValue
        })

        const data = await fetch('/api/feedback', {
            method: 'POST',
            body: requestData,
            header: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())

        console.log('Data:', data)
    }

    async function loadFeedackHandler() {
        const { data } = await fetch('/api/feedback').then(res => res.json())
        console.log(data)
        setFeedbackData(data)
    }

    return (
        <div>
            <h1>Home page</h1>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">Your Email Address</label>
                    <br />
                    <input type="text" id="email" ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor="feedback">Your Feedback</label>
                    <br />
                    <textarea type="text" id="feedback" ref={feedbackInputRef} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
            <hr />
            <button onClick={loadFeedackHandler}>Load Feedback</button>
            <ul>
                {feedbackData.map(item => {
                    return (
                        <li key={item.id}>
                            <strong>{item.email}:</strong>
                            <span>{item.text}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HomePage
