import { useState } from "react";
import { AppointmentForm } from "./AppointmentForm";
import { TileList } from "./TileList";

export function AppointmentsPage({ appointments, contacts, addAppointment }) {
  /* Define state variables for appointment info */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  /* Add contact info and clear data */
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ title, contact, date, time });
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} setTitle={setTitle} contacts={contacts} setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments} />
      </section>
    </div>
  );
}
