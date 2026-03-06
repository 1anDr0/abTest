import { useState } from "react";
import "./HypotesBuilder.css";
import LeftPanel from "../Leftpanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";

const HypotesBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Steg 1
    observation: "",
    evidence: "Användartester",

    //Steg 2
    problem: "",

    //Steg 3
    change: "",
    target: "Alla användare",
    where: "Startsida",

    //Steg 4
    effect: "Klickfrekevensen (CTR)",
  });

  return (
    <div className="page">
      <div className="page-inner">
        <div className="layout">
          <div className="leftpanel-container">
            <LeftPanel
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="rightpanel-container">
            <RightPanel currentStep={currentStep} formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HypotesBuilder;
