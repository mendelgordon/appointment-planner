import { ContactPicker } from "./ContactPicker";

export function AppointmentForm({ contacts, title, setTitle, contact, setContact, date, setDate, time, setTime, handleSubmit }) {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <ContactPicker contacts={contacts} contact={contact} setContact={setContact} />
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required min={getTodayString()} />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <div>
        <button type="submit">Add Appointment</button>
      </div>
    </form>
  );
}
