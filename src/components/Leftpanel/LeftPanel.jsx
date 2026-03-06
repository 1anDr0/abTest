import "./Leftpanel.css";
import Header from "./Header/Header";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import { FaArrowRightLong } from "react-icons/fa6";

const LeftPanel = ({ currentStep, setCurrentStep, formData, setFormData }) => {
  return (
    <div className="leftpanel">
      <Header />

      <div className="step-card active">
        {currentStep === 1 && (
          <Step1 formData={formData} setFormData={setFormData} />
        )}

        <button
          className="next-btn"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Nästa steg <FaArrowRightLong />
        </button>
      </div>
      <div className="step-card collapsed">
        <Step2 />
      </div>

      <div className="step-card collapsed">
        <Step3 />
      </div>
      <div className="step-card collapsed">
        <Step4 />
      </div>
    </div>
  );
};

export default LeftPanel;
