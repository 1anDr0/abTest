import React from 'react'
import StepFields from '../Stepfields/StepFields'
import '../HypothesisBuilderPage/LeftPanel.css'

const LeftPanel = ({values, handleChange}) => {
  return (
    <div className='LeftPanel'>
        <div className='wrapper'>
    <StepFields
    id="observation"
    label="Vad har ni observerat?"
    prefix="Vi har observerat att"
    value={values.observation}
    onChange={(value) => handleChange("observation", value)}
    />
     {/* <StepFields
        id="evidence"
        label="Hur vet ni detta?"
        prefix="genom att"
        placeholder="Exempel: titta på klick i Hotjar/GA4."
      />
       <StepFields
        id="goal"
        label="Hur vet ni detta?"
        prefix="Vi vill"
        placeholder="Exempel: öka andelen som klickar på knappen."
      />
      <StepFields
        id="audience"
        label="Vem påverkas?"
        prefix="Vi vill"
        placeholder="Exempel: öka andelen som klickar på knappen."
      />
      <StepFields
        id="effect"
        label="Vilken effekt förväntar ni er?"
        prefix="Vi vill"
        placeholder="Exempel: öka andelen som klickar på knappen."
      />
      <StepFields
        id="metric"
        label="Hur mäts framgång?"
        prefix="Vi vill"
        placeholder="Exempel: öka andelen som klickar på knappen."
      /> */}
    </div>
    </div>
  )
}

export default LeftPanel