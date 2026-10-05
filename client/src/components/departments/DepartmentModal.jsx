import "./DepartmentModal.css";

function DepartmentModal({ closeModal }) {
  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Add Department</h2>

        <input
          type="text"
          placeholder="Department Name"
        />

        <input
          type="text"
          placeholder="HOD Name"
        />

        <select>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <div className="modal-buttons">
          <button onClick={closeModal}>
           Cancel
          </button>
          <button>Save</button>
        </div>

      </div>

    </div>
  );
}

export default DepartmentModal;