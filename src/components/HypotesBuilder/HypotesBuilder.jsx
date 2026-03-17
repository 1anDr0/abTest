import { useState, useEffect } from "react";
import "./HypotesBuilder.css";
import LeftPanel from "../Leftpanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";

const HypotesBuilder = ({
  currentStep,
  setCurrentStep,
  onObservationChange,
  showHeader,
}) => {
  // whether the hypothesis has been explicitly finished by the user
  const [finalized, setFinalized] = useState(false);

  const [formData, setFormData] = useState({
    // Steg 1
    observation: "",
    evidence: "Välj källa",
    evidenceCustom: "",
    // Steg 2
    problem: "",
    // Steg 3
    change: "",
    target: "Välj målgrupp",
    where: "Välj plats på sidan",
    // Steg 4
    effect: "Välj KPI/effekt",
    direction: "increase",
  });

  // Anropa callback när observation ändras
  const handleFormData = (data) => {
    if (onObservationChange) {
      onObservationChange(data.observation);
    }
    setFormData(data);
  };

  return (
    <div className="page">
      <div className="page-inner">
        <div className="layout">
          <div className="leftpanel-container">
            <LeftPanel
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              formData={formData}
              setFormData={handleFormData}
              finalized={finalized}
              setFinalized={setFinalized}
              showHeader={showHeader}
            />
          </div>
          <RightPanel
            currentStep={currentStep}
            formData={formData}
            finalized={finalized}
          />
        </div>
      </div>
    </div>
  );
};

export default HypotesBuilder;
