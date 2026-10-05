import "./DepartmentTable.css";

const departments = [
  {
    id: 1,
    name: "CSE",
    hod: "Dr. Kumar",
    status: "Active",
  },
  {
    id: 2,
    name: "ECE",
    hod: "Dr. Reddy",
    status: "Active",
  },
  {
    id: 3,
    name: "EEE",
    hod: "Dr. Rao",
    status: "Active",
  },
  {
    id: 4,
    name: "AIML",
    hod: "Dr. Sharma",
    status: "Active",
  },
];

function DepartmentTable({ openModal }) {
  return (
    <div className="department-card">

      <div className="department-header">

        <h2>Department List</h2>

        <button onClick={openModal}>
           Add Department
        </button>

      </div>

      <input
        placeholder="Search Department..."
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
                ✏️ 🗑️
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DepartmentTable;