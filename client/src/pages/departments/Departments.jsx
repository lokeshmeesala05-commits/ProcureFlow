import DepartmentTable from "../../components/departments/DepartmentTable";
import DepartmentModal from "../../components/departments/DepartmentModal";
import { useState } from "react";
function Departments() {
  const [showModal, setShowModal] = useState(false);  
  return (
    <>
      <h1>Departments</h1>
      <DepartmentTable openModal={() => setShowModal(true)} />
      {showModal && (
        <DepartmentModal closeModal={() => setShowModal(false)} />
       )}
    </>
  );
}

export default Departments;