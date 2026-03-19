import { useState } from "react";
import "./HypotesBuilder.css";
import LeftPanel from "../Leftpanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";

const HypotesBuilder = ({ currentStep, setCurrentStep }) => {
  const [finalized, setFinalized] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

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
    targetCustom: "",
    where: "Välj plats på sidan",
    whereCustom: "",

    // Steg 4
    effect: "Välj KPI/effekt",
    effectCustom: "",
    direction: "",
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
              finalized={finalized}
              setFinalized={setFinalized}
              showHeader={showHeader}
              setShowHeader={setShowHeader}
            />
          </div>

          <RightPanel
            currentStep={currentStep}
            formData={formData}
            finalized={finalized}
            showHeader={showHeader}
          />
        </div>
      </div>
    </div>
  );
};

export default HypotesBuilder;
