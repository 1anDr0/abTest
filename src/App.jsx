import "./App.css";
import HypotesBuilder from "./components/HypotesBuilder/HypotesBuilder";
import { useState } from "react";
import Header from "./components/Leftpanel/Header/Header";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  // Step 1 är öppet från start
  const [currentStep, setCurrentStep] = useState(1);

  // Gör setShowHeader globalt tillgänglig för workaround
  window.setShowHeader = setShowHeader;

  // Dölj toast när användaren börjar skriva i observation
  const handleObservation = (observation) => {
    if (showHeader && observation && observation.trim() !== "") {
      setShowHeader(false);
    }
  };

  // OK-knappen döljer toast och öppnar step 1
  const handleHeaderOk = () => {
    window.focusStep1Textarea = true;
    setShowHeader(false);
    setCurrentStep(1);
  };

  return (
    <>
      {showHeader && <Header visible={true} onOk={handleHeaderOk} />}
      <div>
        <HypotesBuilder
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          onObservationChange={handleObservation}
          showHeader={showHeader}
        />
      </div>
    </>
  );
}

export default App;
