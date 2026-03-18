import { useState, useEffect } from "react";
import "./HypotesBuilder.css";
import LeftPanel from "../Leftpanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";

const HypotesBuilder = ({ currentStep, setCurrentStep }) => {
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
    direction: "",
  });

  // Uppdatera formData
  const handleFormData = (data) => {
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
            />
          </div>
          <RightPanel
            currentStep={currentStep}
            formData={formData}
            finalized={finalized}
            showHeader={
              typeof window !== "undefined" && window.showHeader !== undefined
                ? window.showHeader
                : false
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HypotesBuilder;
