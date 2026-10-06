import "./DepartmentTable.css";


function DepartmentTable({departments,search,setSearch,  openModal,     editDepartment, deleteDepartment,}) {
  return (
    <div className="department-card">

      <div className="department-header">

        <h2>Department List</h2>

        <button onClick={openModal}>
           Add Department
        </button>

      </div>

      <input
        type="text"
        placeholder="Search Department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>HOD</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {departments.map((department) => (

            <tr key={department.id}>

              <td>{department.name}</td>

              <td>{department.hod}</td>

              <td>{department.status}</td>

              <td>
               <span
               style={{ cursor: "pointer", marginRight: "10px" }}
               onClick={() => editDepartment(department)}
                >
               ✏️
               </span>

               <span style={{ cursor: "pointer" }}
               onClick={() => {
               if (window.confirm("Are you sure you want to delete this department?")) {
               deleteDepartment(department.id);
               }
               }}
               >
                🗑️
               </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DepartmentTable;