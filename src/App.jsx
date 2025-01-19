//import { useState } from 'react'
// 
import contactsExample from './contactsExample.json'
import ContactList from './components/contactList'
import ContactForm from './components/form/contactForm'
import SearchBox from './components/searchBox'

import './App.css'




function App() {
  return (
    <>
      <h1 >Phonebook </h1>
      <ContactList></ContactList>
      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      
    </>
)
}

export default App
