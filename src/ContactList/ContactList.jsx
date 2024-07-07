import Contact from '../Contact/Contact'

const ContactList = ({userinfo, onDeleteContact}) => {
  return (
    <>
        {userinfo.map(({username, number}, index) => (
        <Contact key = {index} username = {username} number = {number} onDelete={() => onDeleteContact(index)}/>
      ))}
    </>
  )
}

export default ContactList