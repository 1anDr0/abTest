import React from 'react'
import '../HypothesisBuilderPage/RightPanel.css'

const RightPanel = ({ observation, evidence, goal, audience, effect }) => {
  return (
    <div className='RightPanel'>
    <p className='text'>
      <strong>Vi har observerat</strong> {observation} {""}
      <strong>genom att</strong> {evidence} {". "}
      <strong>Vi vill</strong> {goal}{" "}
      <strong>för</strong> {audience}{" "}
      <strong>Detta bör leda</strong> {effect}{"."}
    </p>
    </div>
  )
}

export default RightPanel