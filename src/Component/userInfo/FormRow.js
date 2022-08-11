import React from 'react'

function FormRow({type,name,values,handleChange,labelText}) {
  return (
    <div>
        <label htmlFor="">
            {labelText || name}
        </label>
        <input 
        type={type}
        value={values.name}
        name={name}
        handleChange={handleChange}
        className="lock border border-grey-light w-full p-3 rounded mb-4"
        />
    </div>
  )
}

export default FormRow