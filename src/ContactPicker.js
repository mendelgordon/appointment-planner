export function ContactPicker(props) {
  return (
    <div>
      <label htmlFor="contact">Contact</label>
      <select id="contact" value={props.contact} onChange={(e) => props.setContact(e.target.value)}>
        <option value="">Select...</option>
        {props.contacts.map((contact, index) => (
          <option key={index} value={contact.id}>
            {contact.name}
          </option>
        ))}
      </select>
    </div>
  );
}
