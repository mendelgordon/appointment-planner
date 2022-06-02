import { NavLink, Outlet, Routes, Route } from "react-router-dom";
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
      <nav>
        <NavLink to="/contacts" className={({ isActive }) => (isActive ? "active" : "inactive")}>
          Contacts
        </NavLink>
        <NavLink to="/appointments" className={({ isActive }) => (isActive ? "active" : "inactive")}>
          Appointments
        </NavLink>
      </nav>

      <Outlet />

      <Routes>
        <Route path="/" element={<App />}>
          <Route path="contacts" element={<ContactsPage contacts={contacts} addContact={addContact} />} />
          <Route path="appointments" element={<AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} />} />
        </Route>
      </Routes>
    </div>
  );
}
