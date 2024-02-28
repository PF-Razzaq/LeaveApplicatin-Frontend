import React from "react";
import AddEmployee from "./AddEmployee/AddEmployee";

const CrateEditForm = ({ onCreate, onEdit, employeeToEdit }) => {
  const handleCreate = async ({ e, formData }) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      console.log("Employee created successfully");
      props.resetState();
      props.toggle();
    } catch (error) {
      if (error.response) {
        console.error("Error creating:", error.response.data);
      } else {
        console.error("Error creating employee:", error.message);
      }
    }
    onCreate(formData);
  };
  const handleEdit = async (e, formData) => {
    console.log("Employee edited successfully formData.pk", formData);
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${employee_id}/`, formData); // Use template literals to construct the URL
      props.resetState();
      props.toggle();
    } catch (error) {
      if (error.response) {
        console.error("Error editing:", error.response.data);
      } else {
        console.error("Error editing employee:", error.message);
      }
    }
    onEdit(formData);
  };
  return (
    <>
      <h2>{employeeToEdit ? "Edit Employee" : "Create Employee"}</h2>
      <AddEmployee
        onSubmit={employeeToEdit ? handleEdit : handleCreate}
        initialData={employeeToEdit}
      />
    </>
  );
};

export default CrateEditForm;
