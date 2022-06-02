export function ContactForm({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) {
  function validatePhone(e) {
    const regex = new RegExp("^([0-9()/+ -]*)$");
    const phone = e.target.value;
    if (regex.test(phone)) {
      setPhone(phone);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" value={phone} onChange={validatePhone} required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
}
