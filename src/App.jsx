import "./App.css";
import HypotesBuilder from "./components/HypotesBuilder/HypotesBuilder";
import { useState } from "react";
import Header from "./components/Leftpanel/Header/Header";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  // Dölj toast när användaren börjar skriva i observation
  const handleObservation = (observation) => {
    if (showHeader && observation && observation.trim() !== "") {
      setShowHeader(false);
    }
  };

  // OK-knappen döljer toast och öppnar step 1
  const handleHeaderOk = () => {
    setShowHeader(false);
    setCurrentStep(1);
  };

  return (
    <>
      <div>
        <HypotesBuilder
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          onObservationChange={handleObservation}
        />
      </div>
    </>
  );
}

export default App;
