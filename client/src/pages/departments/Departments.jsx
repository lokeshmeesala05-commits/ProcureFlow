import DepartmentTable from "../../components/departments/DepartmentTable";
import DepartmentModal from "../../components/departments/DepartmentModal";
import { useState } from "react";
function Departments() {
  const [showModal, setShowModal] = useState(false); 
  const [selectedDepartment, setSelectedDepartment] = useState(null); 
  const [search, setSearch] = useState("");
  const [departments, setDepartments] = useState([
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
  ]);
  const addDepartment = (newDepartment) => {
   setDepartments([
    ...departments,
    {
      id: departments.length + 1,
      ...newDepartment,
    },
   ]);

   setShowModal(false);
  };

  const updateDepartment = (updatedDepartment) => {
   setDepartments(
    departments.map((department) =>
      department.id === updatedDepartment.id
        ? updatedDepartment
        : department
    )
   );

   setShowModal(false);
   setSelectedDepartment(null);
  };

  const deleteDepartment = (id) => {
   setDepartments(
    departments.filter((department) => department.id !== id)
   );
  };

  const filteredDepartments = departments.filter ((department) =>
   department.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Departments</h1>
      <DepartmentTable
        departments={filteredDepartments}
        search={search}
        setSearch={setSearch}
       openModal={() => {
        setSelectedDepartment(null);
        setShowModal(true);
       }}
       editDepartment={(department) => {
        setSelectedDepartment(department);
        setShowModal(true);
       }}
       deleteDepartment={deleteDepartment}
      />
      {showModal && (
        <DepartmentModal
          closeModal={() => {
           setShowModal(false);
           setSelectedDepartment(null);
          }}
          addDepartment={addDepartment}
          updateDepartment={updateDepartment}
          selectedDepartment={selectedDepartment}
        />
       )}
    </>
  );
}

export default Departments;