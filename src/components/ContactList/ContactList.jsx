import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
