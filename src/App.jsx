import LeftPanel from './components/HypothesisBuilderPage/LeftPanel'
import RightPanel from './components/HypothesisBuilderPage/RightPanel'
import './App.css'
import { useState } from 'react'

function App() {
 
  const [values, setValues] = useState({
    observation: "",
    // evidence: "",
    // goal: "",
    // observation: "",
    // observation: "",
    // observation: "",
  })

    const handleChange = (field, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };
  
  //SKICKA SEDAN ALLA STATE VARIABLER SOM PROPS TILL LEFTPANEL -> RESPEKTIVE INPUTFÄLT
  return (
    <>
      <LeftPanel values={values} handleChange={handleChange} />
       {/* <RightPanel values={values} /> */}
    </>
  )
}

export default App
