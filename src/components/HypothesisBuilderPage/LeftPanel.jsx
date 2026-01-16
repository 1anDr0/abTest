import React from 'react'
import StepFields from '../Stepfields/StepFields'
import '../HypothesisBuilderPage/LeftPanel.css'

const LeftPanel = ({value, setObservation, setEvidence, setGoal, setAudience, setEffect, setMetric, activeInput, setActiveInput}) => {
  return (
    <div className='LeftPanel'>
        <div className='wrapper'>
      <StepFields
        id="observation"
        label="Vad har ni observerat?"
        prefix="Vi har observerat att"
        placeholder="nästan ingen av alla som besöker startsidan klickar på den viktigaste CTA-knappen 'Kontakta oss'"
        value={value}
        onChange={setObservation}
        activeInput={activeInput}
        setActiveInput={setActiveInput}
      />
     <StepFields
        id="evidence"
        label="Hur vet ni detta?"
        prefix="genom att"
        placeholder="titta på antalet klick i Hotjar heatmaps"
        value={value}
        onChange={setEvidence}
        activeInput={activeInput}
        setActiveInput={setActiveInput}
      />
       <StepFields
        id="goal"
        label="Vad vill ni uppnå?"
        prefix="Vi vill"
        placeholder="att knappen fångar mer uppmärksamhet och ger mer värde genom att byta texten till 'Jag är nyfiken, berätta mer!'"
        value={value}
        onChange={setGoal}
        activeInput={activeInput}
        setActiveInput={setActiveInput}
      />
      <StepFields
        id="audience"
        label="Vem påverkas?"
        prefix="för"
        placeholder="alla användare."
        value={value}
        onChange={setAudience}
        activeInput={activeInput}
        setActiveInput={setActiveInput}
      />
      <StepFields
        id="effect"
        label="Vilken effekt förväntar ni er?"
        prefix="Detta bör leda"
        placeholder="till ökat intresse"
        value={value}
        onChange={setEffect}
        activeInput={activeInput}
        setActiveInput={setActiveInput}
      />
      <StepFields
        id="metric"
        label="Hur mäts framgång?"
        prefix="och effekten kommer att mätas "
        placeholder="ökad CTR på knappen."
        value={value}
        onChange={setMetric}
        activeInput={activeInput}
        setActiveInput={setActiveInput}      
        />
    </div>
    </div>
  )
}

export default LeftPanel