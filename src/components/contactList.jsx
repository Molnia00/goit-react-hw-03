import Contact from './contacts';




function ContactList({ contacts}) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact/>
        </li>
      ))}
    </ul>
  );
}




export default ContactList;