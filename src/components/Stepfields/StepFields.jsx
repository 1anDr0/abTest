import React from 'react'
import "./StepFields.css"

const StepFields = ({label, prefix, id, placeholder, value, onChange}) => {
  return (
    <div className='stepfields'>
      <div className='wrapper'>
       
        <div className='header'>
        <label htmlFor={id} className='label'>{label}</label>
        <button className='help'>Help</button>
        </div>

        <div className="inputShell">
        {prefix && <span className="prefix">{prefix}</span>}
        <textarea
          id={id}
          className="textarea"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}

        />
        </div>
      </div>
    </div>
  )
}

export default StepFields