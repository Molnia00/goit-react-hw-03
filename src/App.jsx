//import { useState } from 'react'
// 

import ContactList from './components/contactList'
import ContactForm from './components/form/contactForm'
import SearchBox from './components/searchBox'

import './App.css'
import { useState } from 'react'




function App() {

  const [contacts, setContacts] = useState(
    [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
);

  const [search, setSearch] = useState('');


  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
     <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filteredContacts} />
      
    </>
  );
}

export default App;