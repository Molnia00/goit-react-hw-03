import Contact from './contacts';
import s from './contact.module.css'



function ContactList({ contacts}) {
  return (
    <ul className={s.listOfContacts}>
      {contacts.map(contact => (
        <li className={s.iteamOfContacts} key={contact.id}>
              <Contact
                  name={contact.name }
                  number={contact.number}
                  onDelete={onDelete}
              />
        </li>
      ))}
    </ul>
  );
}




export default ContactList;