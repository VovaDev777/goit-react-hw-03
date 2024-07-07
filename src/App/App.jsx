import ContactForm from "../ContactForm/ContactForm"
import { useState } from "react"
// import Contact from "../Contact/Contact";
import SearchBox from '../SearchBox/SearchBox'
import 'normalize.css';
import ContactList from "../ContactList/ContactList";

const App = () => {
  const [contacts, setContact] = useState([]);

  const handleAddContact = (contact) => {
    setContact([...contacts, contact])
  }
  const handleDeleteContact = (index) => {
    setContact(contacts.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact = {handleAddContact}/>
      <SearchBox/>
      <ContactList userinfo = {contacts} onDeleteContact = {handleDeleteContact}/>
      
    </>
  )
}

export default App