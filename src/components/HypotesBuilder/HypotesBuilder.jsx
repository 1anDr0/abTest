import { useState } from "react";
import "./HypotesBuilder.css";
import LeftPanel from "../Leftpanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";

const HypotesBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Steg 1
    observation: " 25% av användare inte klickar på CTA-knappen",
    evidence: "Användartester",
  });

  return (
    <div className="page">
      <div className="layout">
        <div className="leftpanel-container">
          <LeftPanel
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <RightPanel currentStep={currentStep} formData={formData} />
      </div>
    </div>
  );
};

export default HypotesBuilder;
