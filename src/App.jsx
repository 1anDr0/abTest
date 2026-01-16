import LeftPanel from './components/HypothesisBuilderPage/LeftPanel'
import RightPanel from './components/HypothesisBuilderPage/RightPanel'
import './App.css'
import { useState } from 'react'

function App() {
 
  const [observation, setObservation] = useState("nästan inga besökare klickar på CTA-knappen ‘Kontakta oss’ på startsidan.")
  const [evidence, setEvidence] = useState("titta på antalet klick i Hotjar heatmaps")
  const [goal, setGoal] = useState("att knappen fångar mer uppmärksamhet och ger mer värde genom att byta texten till 'Jag är nyfiken, berätta mer!'")
  const [audience, setAudience] = useState("alla användare.")
  const [effect, setEffect] = useState("till ökat intresse")
  const [metric, setMetric] = useState("och effekten kommer att mätas i ökad")
  
  return (
    <>
    <div className='app'>
      <LeftPanel 
       observation={observation}
        setObservation={setObservation}
        evidence={evidence}
        setEvidence={setEvidence}
        goal={goal}
        setGoal={setGoal}
        audience={audience}
        setAudience={setAudience} 
        effect={effect}
        setEffect={setEffect}
        metric={metric}
        setMetric={setMetric}
         />
       <RightPanel  
        observation={observation}
        evidence={evidence} 
        goal={goal}
        audience={audience}
        effect={effect}
        metric={metric}
       />
       </div>
    </>
  )
}

export default App

























// const handleChange = (field, value) => {
//   setValues((prevValues) => ({
//     ...prevValues,
//     [field]: value,
//   }));
// };

// const [values, setValues] = useState({
  //   observation: "nästan inga besökare klickar på CTA-knappen ‘Kontakta oss’ på startsidan.",
//   evidence: "",
//   goal: "",
//   observation: "",
//   observation: "",
//   observation: "",
// })