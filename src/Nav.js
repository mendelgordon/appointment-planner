import { NavLink, Outlet } from "react-router-dom";

export function Nav() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
        <NavLink to="appointments">Appointments</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
