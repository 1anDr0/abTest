import "./App.css";
import HypotesBuilder from "./components/HypotesBuilder/HypotesBuilder";
import { useState } from "react";
import Header from "./components/Leftpanel/Header/Header";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  // Starta på step 0 (eller null) så att inget steg är öppet
  const [currentStep, setCurrentStep] = useState(0);

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
      {showHeader && <Header visible={true} onOk={handleHeaderOk} />}
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
