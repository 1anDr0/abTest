import "./Leftpanel.css";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Header from "./Header/Header";

import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { TbCircleNumber4 } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiSealCheckBold } from "react-icons/pi";

const LeftPanel = ({
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
  finalized,
  setFinalized,
}) => {
  // helper to check if a given step's required fields are filled
  const isStepComplete = (step) => {
    switch (step) {
      case 1:
        return formData.observation && formData.observation.trim() !== "";
      case 2:
        return formData.problem && formData.problem.trim() !== "";
      case 3:
        return (
          formData.change &&
          formData.change.trim() !== "" &&
          formData.target &&
          formData.target.trim() !== "" &&
          formData.where &&
          formData.where.trim() !== ""
        );
      case 4:
        return formData.effect && formData.effect.trim() !== "";
      default:
        return false;
    }
  };

  const allComplete = [1, 2, 3, 4].every(isStepComplete);
  const canGoNext = isStepComplete(currentStep);

  const handleStepClick = (step) => {
    if (step <= currentStep || allComplete) {
      setCurrentStep(step);
    }
  };

  return (
    <div classname="leftpanel-wrapper">
      <div classname="leftpanel-header">
        <Header />
      </div>
      <div className="leftpanel">
        <div className="steps-container">
          {/* steg 1 */}
          <div
            className={`step-card ${currentStep === 1 ? "active" : "collapsed"} ${1 > currentStep && !allComplete ? "disabled" : ""}`}
            onClick={() => handleStepClick(1)}
          >
            <div className="step-heading">
              {isStepComplete(1) ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : (
                <TbCircleNumber1 className="step-icon" />
              )}
              <h2>Insikt / Observation</h2>
            </div>

            {currentStep === 1 && (
              <>
                <div className="line">
                  <Step1 formData={formData} setFormData={setFormData} />
                  <button
                    className="next-btn"
                    disabled={!canGoNext}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (canGoNext) setCurrentStep(2);
                    }}
                  >
                    Nästa steg <FaLongArrowAltRight />
                  </button>
                </div>
              </>
            )}
          </div>
          {/* steg 2 */}
          <div
            className={`step-card ${currentStep === 2 ? "active" : "collapsed"} ${2 > currentStep && !allComplete ? "disabled" : ""}`}
            onClick={() => handleStepClick(2)}
          >
            <div className="step-heading">
              {isStepComplete(2) ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : (
                <TbCircleNumber2 className="step-icon" />
              )}
              <h2>Tolkning</h2>
            </div>

            {currentStep === 2 && (
              <>
                <div className="line">
                  <Step2 formData={formData} setFormData={setFormData} />
                  <button
                    className="next-btn"
                    disabled={!canGoNext}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (canGoNext) setCurrentStep(3);
                    }}
                  >
                    Nästa steg <FaLongArrowAltRight />
                  </button>
                </div>
              </>
            )}
          </div>
          {/* steg 3 */}
          <div
            className={`step-card ${currentStep === 3 ? "active" : "collapsed"} ${3 > currentStep && !allComplete ? "disabled" : ""}`}
            onClick={() => handleStepClick(3)}
          >
            <div className="step-heading">
              {isStepComplete(3) ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : (
                <TbCircleNumber3 className="step-icon" />
              )}
              <h2>Förändring</h2>
            </div>

            {currentStep === 3 && (
              <>
                <div className="line">
                  <Step3 formData={formData} setFormData={setFormData} />
                  <button
                    className="next-btn"
                    disabled={!canGoNext}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (canGoNext) setCurrentStep(4);
                    }}
                  >
                    Nästa steg <FaLongArrowAltRight />
                  </button>
                </div>
              </>
            )}
          </div>
          {/* steg 4 */}
          <div
            className={`step-card ${currentStep === 4 && !finalized ? "active" : "collapsed"} ${4 > currentStep && !allComplete ? "disabled" : ""}`}
            onClick={() => handleStepClick(4)}
          >
            <div className="step-heading">
              {isStepComplete(4) ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : (
                <TbCircleNumber4 className="step-icon" />
              )}
              <h2>Effekt</h2>
            </div>

            {currentStep === 4 && !finalized && (
              <div className="line">
                <Step4
                  formData={formData}
                  setFormData={setFormData}
                  finalized={finalized}
                  setFinalized={setFinalized}
                />
              </div>
            )}
          </div>{" "}
          {/* end step-card */}
        </div>{" "}
        {/* end steps-container */}
      </div>
    </div>
  );
};

export default LeftPanel;
