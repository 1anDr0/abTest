import React from 'react'
import "./StepFields.css"
import { AiFillQuestionCircle } from "react-icons/ai";




const StepFields = ({label, prefix, id, placeholder, value, onChange, activeInput, setActiveInput}) => {
  
  
  const handleClick = () => {
    setActiveInput(id);  
  };

  return (
    <div className='stepfields'>
      <div className='wrapper' onClick={handleClick}>
       
        <div className='header'>
        <label htmlFor={id} className='label'>{label}</label>
        <p className='help'><AiFillQuestionCircle /></p>
        </div>

         {/* Conditionally hide inputShell */}
        <div className={`inputShell ${activeInput !== id ? 'hidden' : ''}`}>
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