import ContactForm from "../ContactForm/ContactForm"
import { useState } from "react"
import SearchBox from '../SearchBox/SearchBox'
import ContactList from "../ContactList/ContactList";
import css from './App.module.css'

const App = () => {
  const [contacts, setContact] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddContact = (contact) => {
    setContact([...contacts, contact])
  }
  const handleDeleteContact = (index) => {
    setContact(contacts.filter((_, i) => i !== index));
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm onAddContact = {handleAddContact}/>
      <SearchBox />
      <ContactList userinfo = {contacts} onDeleteContact = {handleDeleteContact}/>
      
    </div>
  )
}

export default App