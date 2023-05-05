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
    <div className="container-fluid d-flex flex-row justify-content-center ">

      <div className="row  w-100 d-flex flex-row justify-content-center">
        <div className="col-md-6">
        <form className=" rounded shadow  mt-5 " onSubmit={handleSubmit}
    style={{backgroundColor:"rgba(231, 109, 36, 0.4)"}}>
      
      {fields.map((field) => (
        <div className="w-25  " key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input className="rounded "
            type={field.type}
            id={field.name}
            name={field.name}
            value={formState[field.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
      <button className="btn btn-outline-light btn-rounded mt-5"  type="submit">Submit</button>
    </form>
        </div>
      </div>
  
    </div>
  );
}

export default GenericForm;