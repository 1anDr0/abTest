import "./Leftpanel.css";
import Header from "./Header/Header";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";

import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { TbCircleNumber4 } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";

const LeftPanel = ({ currentStep, setCurrentStep, formData, setFormData }) => {
  return (
    <div className="leftpanel">
      <Header />

      {/* steg 1 */}
      <div
        className={`step-card ${currentStep === 1 ? "active" : "collapsed"}`}
      >
        <div className="step-heading">
          <TbCircleNumber1 className="step-icon" />
          <h2>Insikt / Observation</h2>
        </div>

        {currentStep === 1 && (
          <>
            <Step1 formData={formData} setFormData={setFormData} />
            <button className="next-btn" onClick={() => setCurrentStep(2)}>
              Nästa steg <FaLongArrowAltRight />
            </button>
          </>
        )}
      </div>

      {/* steg 2 */}
      <div
        className={`step-card ${currentStep === 2 ? "active" : "collapsed"}`}
      >
        <div className="step-heading">
          <TbCircleNumber2 className="step-icon" />
          <h2>Tolkning</h2>
        </div>

        {currentStep === 2 && (
          <>
            <Step2 formData={formData} setFormData={setFormData} />
            <button className="next-btn" onClick={() => setCurrentStep(3)}>
              Nästa steg <FaLongArrowAltRight />
            </button>
          </>
        )}
      </div>

      {/* steg 3 */}
      <div
        className={`step-card ${currentStep === 3 ? "active" : "collapsed"}`}
      >
        <div className="step-heading">
          <TbCircleNumber3 className="step-icon" />
          <h2>Förändring</h2>
        </div>

        {currentStep === 3 && (
          <>
            <Step3 formData={formData} setFormData={setFormData} />
            <button className="next-btn" onClick={() => setCurrentStep(4)}>
              Nästa steg <FaLongArrowAltRight />
            </button>
          </>
        )}
      </div>

      {/* steg 4 */}
      <div
        className={`step-card ${currentStep === 4 ? "active" : "collapsed"}`}
      >
        <div className="step-heading">
          <TbCircleNumber4 className="step-icon" />
          <h2>Effekt</h2>
        </div>

        {currentStep === 4 && (
          <Step4 formData={formData} setFormData={setFormData} />
        )}
      </div>
    </div>
  );
};

export default LeftPanel;
