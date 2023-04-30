import React from 'react';
import GenericForm from './GenericForm';

function AddHotelForm({ onSubmit }) {
  const fields = [
    { name: 'name', type: 'text', label: 'Name:', required: true },
    { name: 'city', type: 'text', label: 'City:', required: true },
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
    {
      name: 'numberOfReviews',
      type: 'number',
      label: 'Number of Reviews:',
      value: '0',
    },
    {
      name: 'hotelClass',
      type: 'number',
      label: 'Hotel Class:',
      step: '0.1',
      min: '0',
      max: '5',
      value: '0',
    },
    { name: 'phone', type: 'text', label: 'Phone:', unique: true },
    { name: 'address', type: 'text', label: 'Address:' },
    { name: 'location', type: 'text', label: 'Location:' },
  ];

  return (
    <section>
      <h2>Add Hotel</h2>
      <GenericForm fields={fields} onSubmit={onSubmit} />
    </section>
  );
}

export default AddHotelForm;