import { useState } from "react";
import { ContactForm } from "./ContactForm";
import { TileList } from "./TileList";

export function ContactsPage(props) {
  /* Define state variables for contact info and duplicate check */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data if the contact name is not a duplicate */
    if (!duplicate) {
      props.addContact({ name, phone, email });
      setName("");
      setPhone("");
      setEmail("");
      setDuplicate(false);
    }
  };
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={props.contacts} />
      </section>
    </div>
  );
}
