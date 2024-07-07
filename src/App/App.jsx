import ContactForm from "../ContactForm/ContactForm"
import { useState } from "react"

const App = () => {
  [contacts, setContact] = useState();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>
    </>
  )
}

export default App