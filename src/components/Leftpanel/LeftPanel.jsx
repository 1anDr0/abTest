import Header from "./Header/Header";
import Step1 from "./Step1/Step1";

const LeftPanel = ({ currentStep, setCurrentStep, formData, setFormData }) => {
  return (
    <div>
      <Header />

      {currentStep === 1 && (
        <Step1 formData={formData} setFormData={setFormData} />
      )}
      <div>
        <button onClick={() => setCurrentStep(currentStep + 1)}>
          Nästa steg
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
