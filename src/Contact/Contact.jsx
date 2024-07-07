import React from 'react'

const Contact = ({username, number}) => {
  return (
    <div>
        <ul>
            <li>
                <p>{username}</p>
            </li>
            <li>
                <p>{number}</p>
            </li>
        </ul>
        <button type='submit'>Delete</button>
    </div>
  )
}

export default Contact