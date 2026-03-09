import { useState } from "react";
import "./HypotesBuilder.css";
import LeftPanel from "../Leftpanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import Header from "../Leftpanel/Header/Header";

const HypotesBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // whether the hypothesis has been explicitly finished by the user
  const [finalized, setFinalized] = useState(false);

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
    // effect starts empty so the user must actively choose it
    effect: "",
    // default direction set to "increase" so the Öka radio is preselected
    direction: "increase",
  });

  return (
    <div className="page">
      <div className="page-inner">
        {/* <Header /> */}
        <div className="layout">
          <div className="leftpanel-container">
            <LeftPanel
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              formData={formData}
              setFormData={setFormData}
              finalized={finalized}
              setFinalized={setFinalized}
            />
          </div>
          <div className="rightpanel-container">
            <RightPanel
              currentStep={currentStep}
              formData={formData}
              finalized={finalized}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HypotesBuilder;
