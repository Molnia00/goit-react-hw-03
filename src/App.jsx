//import { useState } from 'react'
// 
import contactsExample from './contactsExample.json'
import ContactList from './components/contactList'
import ContactForm from './components/form/contactForm'
import SearchBox from './components/searchBox'

import './App.css'
import { useState } from 'react'




function App() {

  const [findContact, setFindContact] = useState(
    [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
);









  return (
    <>
      <h1 >Phonebook </h1>
      <SearchBox />
      <ContactList contacts={findContact}/>
      <ContactForm/>
      
      
    </>
)
}

export default App
