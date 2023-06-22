import React from 'react';
import GenericForm from './GenericForm';

function AddAttractionForm({ onSubmit }) {
  const fields = [
    { name: 'name', type: 'text', label: 'Name:', required: true },
    { name: 'rating', type: 'number', label: 'Rating:', min: 1, max: 5, step: 0.1, defaultValue: 4.5 },
    { name: 'num_reviews', type: 'number', label: 'Number of Reviews:', defaultValue: 0 },
    { name: 'description', type: 'textarea', label: 'Description:' },
    { name: 'activityDescriptors', type: 'text', label: '#:' },
  ];

  return (
    <div className="container-fluid">
      <h1 className="m-5 mb-3 ms-4" style={{color:"#8F9090"}}><strong>Add Attraction</strong></h1>
      <GenericForm
       fields={fields}
        onSubmit={onSubmit} 
        />
    </div>
   
  );
}

export default AddAttractionForm;