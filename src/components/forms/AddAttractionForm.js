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
    <section>
      <h2>Add Attraction</h2>
      <GenericForm fields={fields} onSubmit={onSubmit} submitButtonText="Add Attraction" />
    </section>
  );
}

export default AddAttractionForm;