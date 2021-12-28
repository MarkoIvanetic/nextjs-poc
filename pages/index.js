import React, { useRef } from 'react'

import Link from 'next/link'

const HomePage = () => {
    const emailInputRef = useRef()
    const feedbackInputRef = useRef()

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
        </div>
    )
}

export default HomePage
