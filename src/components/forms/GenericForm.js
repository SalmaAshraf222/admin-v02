import React, { useState } from 'react';

const GenericForm=({ fields, onSubmit }) =>{
  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
  };

  return (
    <div className="container-fluid">
      {/* <div className="row d-flex flex-column justify-content-around"> */}
    <form className='p-5' onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formState[field.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
      <button className='mt-5'  type="submit">Submit</button>
    </form>
    {/* </div> */}
    </div>
  );
}

export default GenericForm;