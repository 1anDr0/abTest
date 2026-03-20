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
      <div className="layout-background">
        <div className="bg-left" />
        <div className="bg-right" />
      </div>

      <div className="content-shell">
        <div className="content-grid">
          <div className="leftpanel-content">
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

          <div className="rightpanel-content">
            <RightPanel
              currentStep={currentStep}
              formData={formData}
              finalized={finalized}
              showHeader={showHeader}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HypotesBuilder;
