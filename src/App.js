import { Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { ContactsPage } from "./ContactsPage";
import { AppointmentsPage } from "./AppointmentsPage";
import { useState } from "react";

export function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route element={<Home />} index />
          <Route path="contacts" element={<ContactsPage contacts={contacts} addContact={addContact} />} />
          <Route path="appointments" element={<AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} />} />
        </Route>
      </Routes>
    </div>
  );
}

/* 
  sample contact data
    {
      name: "John Doe",
      phone: "555-555-5555",
      email: "john@example.com",
    },
    {
      name: "Jane Doe",
      phone: "666-666-6666",
      email: "jane@example.com",
    }, 
*/

/* 
  sample appointment data
    {
      title: "First appointment",
      contact: "Jane Doe",
      date: "2020-01-01",
      time: "10:00",
    },
    {
      title: "Second appointment",
      contact: "John Doe",
      date: "2020-01-02",
      time: "11:00",
    }, 
*/
