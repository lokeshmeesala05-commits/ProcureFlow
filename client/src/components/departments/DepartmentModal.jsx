import "./DepartmentModal.css";
import { useState,useEffect  } from "react";

function DepartmentModal({ closeModal, addDepartment,updateDepartment,selectedDepartment, }) {

    const [name, setName] = useState("");
    const [hod, setHod] = useState("");
    const [status, setStatus] = useState("Active");
    useEffect(() => {
     if (selectedDepartment) {
      setName(selectedDepartment.name);
      setHod(selectedDepartment.hod);
      setStatus(selectedDepartment.status);
     } else {
      setName("");
      setHod("");
      setStatus("Active");
     }
    }, [selectedDepartment]);
  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Add Department</h2>

        <input
          type="text"
          placeholder="Department Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="HOD Name"
          value={hod}
          onChange={(e) => setHod(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <div className="modal-buttons">
          <button onClick={closeModal}>
           Cancel
          </button>
          <button
           onClick={() => {
           if (selectedDepartment) {
           updateDepartment({
           id: selectedDepartment.id,
           name,
           hod,
           status,
           });
           } else {
           addDepartment({
           name,
           hod,
           status,
           });
           }
           }}
           >
           {selectedDepartment ? "Update" : "Save"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default DepartmentModal;