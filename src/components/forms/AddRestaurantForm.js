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
    <section>
      <h2>Add Restaurant</h2>
      <GenericForm fields={fields} onSubmit={onSubmit} />
    </section>
  );
}

export default AddRestaurantForm;