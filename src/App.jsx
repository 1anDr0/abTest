import "./App.css";
import HypotesBuilder from "./components/HypotesBuilder/HypotesBuilder";
import { useState } from "react";
function App() {
  // Step 1 är öppet från start
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      <HypotesBuilder
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
}

export default App;
