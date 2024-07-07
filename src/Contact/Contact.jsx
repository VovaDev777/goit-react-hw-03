import React from 'react'
import { AiOutlineUser, AiFillPhone } from "react-icons/ai";

const Contact = ({username, number}) => {
  return (
    <div>
        <ul>
            <li>
                <AiOutlineUser />
                <p>{username}</p>
            </li>
            <li>
                <AiFillPhone />
                <p>{number}</p>
            </li>
        </ul>
        <button type='submit'>Delete</button>
    </div>
  )
}

export default Contact