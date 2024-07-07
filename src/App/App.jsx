import ContactForm from "../ContactForm/ContactForm"
import { useState } from "react"
import Contact from "../Contact/Contact";
import SearchBox from '../SearchBox/SearchBox'
import 'normalize.css';

const App = () => {
  const [contacts, setContact] = useState([]);

  const handleAddContact = (contact) => {
    setContact([...contacts, contact])
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact = {handleAddContact}/>
      <SearchBox/>
      {contacts.map(({username, number}, index) => (
        <Contact key = {index} username = {username} number = {number}/>
      ))}
    </>
  )
}

export default App