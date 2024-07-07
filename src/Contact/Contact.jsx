
import { AiOutlineUser, AiFillPhone } from "react-icons/ai";

const Contact = ({username, number, onDelete}) => {
  
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
        <button type='submit' onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Contact