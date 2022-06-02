import { NavLink, Outlet, Routes, Route } from "react-router-dom";
import { ContactsPage } from "./ContactsPage";
import { AppointmentsPage } from "./AppointmentsPage";
import "./App.css";
import { useState } from "react";

export function App() {
  const [contacts, setContacts] = useState([
    {
      name: "Bob",
      phone: "123-456-7890",
      email: "bob@example.com",
    },
  ]);
  const [appointments, setAppointments] = useState([
    {
      title: "Interview",
      contact: "Bob",
      date: "2020-01-01",
      time: "12:00",
    },
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={({ isActive }) => (isActive ? "active" : "inactive")}>
          Contacts
        </NavLink>
        <NavLink to="/appointments" className={({ isActive }) => (isActive ? "active" : "inactive")}>
          Appointments
        </NavLink>
      </nav>

      <Outlet />

      <Routes>
        <Route path="/contacts" element={<ContactsPage contacts={contacts} addContact={addContact} />} />
        <Route path="/appointments" element={<AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} />} />
      </Routes>
    </div>
  );
}
