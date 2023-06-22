import React, { useState } from 'react';
import GenericForm from './GenericForm';

function AddRestaurantForm({ onSubmit }) {
  const fields = [
    { name: 'name', type: 'text', label: 'Name:', required: true },
    { name: 'image', type: 'text', label: 'Image:' },
    {
      name: 'priceLevel',
      type: 'select',
      label: 'Price Level:',
      options: [
        { value: '', label: 'Select Price Level' },
        { value: '$', label: 'Low' },
        { value: '$$', label: 'Medium', selected: true },
        { value: '$$$', label: 'High' },
      ],
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Rating:',
      step: '0.1',
      min: '1',
      max: '5',
      value: '4.5',
    },
    { name: 'phone', type: 'text', label: 'Phone:', unique: true },
    { name: 'cuisine', type: 'text', label: 'Cuisine:' },
    { name: 'location', type: 'text', label: 'Location:' },
  ];

  return (
    <div className="container-fluid">
      <h1 className="m-5 mb-3 ms-4"><strong><u><em>Add Restaurant</em></u></strong></h1>
      <GenericForm
       fields={fields}
        onSubmit={onSubmit} 
        />
    </div>
  );
}

export default AddRestaurantForm;

