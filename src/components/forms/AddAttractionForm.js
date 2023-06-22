import React from 'react';
import GenericForm from './GenericForm';

function AddAttractionForm({ onSubmit }) {
  const fields = [
    { name: 'name', type: 'text', label: 'Name:', required: true },
    { name: 'image', type: 'text', label: 'Image:' },
    { name: 'rating', type: 'number', label: 'Rating:', min: 1, max: 5, step: 0.1, defaultValue: 4.5 },
    { name: 'num_reviews', type: 'number', label: 'Number of Reviews:', defaultValue: 0 },
    { name: 'description', type: 'textarea', label: 'Description:' },
    { name: 'location', type: 'text', label: 'Location:' },
    { name: 'activityDescriptors', type: 'text', label: 'Activity Descriptors:' },
  ];

  return (
    <div className="container-fluid">
      <h1 className="m-5 mb-3 ms-4"><strong><u><em>Add Attraction</em></u></strong></h1>
      <GenericForm
       fields={fields}
        onSubmit={onSubmit} 
        />
    </div>
   
  );
}

export default AddAttractionForm;