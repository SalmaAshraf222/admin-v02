import React from 'react';
import GenericForm from './GenericForm';

function AddUserForm({ onSubmit }) {
  const fields = [
    { name: 'name', type: 'text', label: 'Name:', required: true },
    { name: 'email', type: 'email', label: 'Email:', required: true },
    {
      name: 'role',
      type: 'select',
      label: 'Role:',
      required: true,
      options: [
        { value: '', label: 'Select Role' },
        { value: 'user', label: 'User' },
        { value: 'admin', label: 'Admin' },
        { value: 'business_owner', label: 'Business Owner' },
      ],
    },
    { name: 'password', type: 'password', label: 'Password:', minlength: '8', required: true },
    { name: 'passwordConfirm', type: 'password', label: 'Confirm Password:', minlength: '8', required: true },
  ];

  return (
    <div className="container-fluid ">
      <h1 className="m-5 mb-3 ms-4" style={{color:"#8F9090"}}><strong>Add User</strong></h1>
      <GenericForm
       fields={fields}
        onSubmit={onSubmit} 
        />
    </div>
  );
}

export default AddUserForm;