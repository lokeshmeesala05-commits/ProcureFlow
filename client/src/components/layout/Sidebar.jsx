import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>⬢ ProcureFlow</h2>
        <p>Smart Procurement</p>
      </div>

      <nav>

        <a href="#">Dashboard</a>

        <a href="#">Purchase Requests</a>

        <a href="#">Products</a>

        <a href="#">Vendors</a>

        <a href="#">Inventory</a>

        <a href="#">Maintenance</a>

        <a href="/departments">Departments</a>

        <a href="#">Users</a>

        <a href="#">Reports</a>

      </nav>

    </aside>
  );
}

export default Sidebar;