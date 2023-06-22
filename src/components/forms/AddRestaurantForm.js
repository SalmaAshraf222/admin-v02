import React from "react";
import GenericForm from "./GenericForm";

function AddRestaurantForm({ onSubmit }) {
  const fields = [
    { name: "name", type: "text", label: "Name:", required: true },
    {
      name: "rating",
      type: "number",
      label: "Rating:",
      step: "0.1",
      min: "1",
      max: "5",
      value: "4.5",
    },
    { name: "phone", type: "text", label: "Phone number:", unique: true },
    { name: "cuisine", type: "text", label: "Cuisine:" },
    { name: "location", type: "text", label: "Number of reviews:" },
  ];

  return (
    <div className="container-fluid">
      <h1 className="m-5 mb-3 ms-4" style={{ color: "#8F9090" }}>
        <strong>Add Restaurant</strong>
      </h1>
      <GenericForm fields={fields} onSubmit={onSubmit} />
    </div>
  );
}

export default AddRestaurantForm;
