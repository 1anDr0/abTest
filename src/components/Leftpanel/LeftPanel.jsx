import { useEffect } from "react";
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
import { FaArrowRight } from "react-icons/fa";
import { PiSealCheckBold } from "react-icons/pi";
import { useState } from "react";

const LeftPanel = ({
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
  finalized,
  setFinalized,
}) => {
  // Håller koll på vilka steg som är "avklarade" (när användaren tryckt Nästa)
  const [completedSteps, setCompletedSteps] = useState([]);

  // Mark all steps as completed when hypothesis is finalized
  useEffect(() => {
    if (finalized) {
      setCompletedSteps([1, 2, 3, 4]);
    }
  }, [finalized]);
  // helper to check if a given step's required fields are filled
  const isStepComplete = (step) => {
    switch (step) {
      case 1:
        const hasObservation =
          formData.observation && formData.observation.trim() !== "";
        const evidenceValue = (formData.evidence || "").toLowerCase();
        const hasEvidence =
          evidenceValue !== "" && evidenceValue !== "välj källa";
        const needsCustom = evidenceValue === "annat";
        const hasCustom =
          !needsCustom ||
          (formData.evidenceCustom && formData.evidenceCustom.trim() !== "");
        return hasObservation && hasEvidence && hasCustom;
      case 2:
        return formData.problem && formData.problem.trim() !== "";
      case 3:
        const hasChange = formData.change && formData.change.trim() !== "";
        const targetValue = (formData.target || "").toLowerCase();
        const hasTarget = targetValue !== "" && targetValue !== "välj målgrupp";
        const needsTargetCustom = targetValue === "annat";
        const hasTargetCustom =
          !needsTargetCustom ||
          (formData.targetCustom && formData.targetCustom.trim() !== "");
        const whereValue = (formData.where || "").toLowerCase();
        const hasWhere =
          whereValue !== "" && whereValue !== "välj plats på sidan";
        const needsWhereCustom = whereValue === "annat";
        const hasWhereCustom =
          !needsWhereCustom ||
          (formData.whereCustom && formData.whereCustom.trim() !== "");
        return (
          hasChange &&
          hasTarget &&
          hasTargetCustom &&
          hasWhere &&
          hasWhereCustom
        );
      case 4:
        const effectValue = (formData.effect || "").toLowerCase();
        const hasEffect =
          effectValue !== "" && effectValue !== "välj kpi/effekt";
        const needsEffectCustom = effectValue === "annat";
        const hasEffectCustom =
          !needsEffectCustom ||
          (formData.effectCustom && formData.effectCustom.trim() !== "");
        return hasEffect && hasEffectCustom;
      default:
        return false;
    }
  };

  const allComplete = [1, 2, 3, 4].every(isStepComplete);
  const canGoNext = isStepComplete(currentStep);

  // Lås alla steg om hypotesen är färdigställd
  const handleStepClick = (step) => {
    if (finalized) return;
    if (step <= currentStep || allComplete) {
      setCurrentStep(step);
    }
  };

  // Hjälpfunktion för att markera ett steg som klart när man går vidare
  const markStepComplete = (step) => {
    setCompletedSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));
  };

  return (
    <div className="leftpanel-wrapper">
      <div className="leftpanel-header">{/* <Header /> */}</div>
      <div className="leftpanel">
        <div className="steps-container">
          {/* steg 1 */}
          <div
            className={`step-card ${currentStep === 1 ? "active" : "collapsed"} ${1 > currentStep && !allComplete ? "disabled" : ""}`}
            onClick={() => handleStepClick(1)}
          >
            <div className="step-heading">
              {completedSteps.includes(1) ? (
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
                      if (canGoNext) {
                        markStepComplete(1);
                        setTimeout(() => {
                          setCurrentStep(2);
                        }, 200);
                      }
                    }}
                  >
                    Nästa steg{" "}
                    <span className="next-arrow">
                      <FaArrowRight />
                    </span>
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
              {completedSteps.includes(2) ? (
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
                      if (canGoNext) {
                        markStepComplete(2);
                        setTimeout(() => {
                          setCurrentStep(3);
                        }, 200);
                      }
                    }}
                  >
                    Nästa steg{" "}
                    <span className="next-arrow">
                      <FaArrowRight />
                    </span>
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
              {completedSteps.includes(3) ? (
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
                      if (canGoNext) {
                        markStepComplete(3);
                        setTimeout(() => {
                          setCurrentStep(4);
                        }, 200);
                      }
                    }}
                  >
                    Nästa steg{" "}
                    <span className="next-arrow">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
          {/* steg 4 */}
          <div
            className={`step-card ${currentStep === 4 ? "active" : "collapsed"} ${4 > currentStep && !allComplete ? "disabled" : ""}`}
            onClick={() => handleStepClick(4)}
          >
            <div className="step-heading">
              {completedSteps.includes(4) ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : (
                <TbCircleNumber4 className="step-icon" />
              )}
              <h2>Effekt</h2>
            </div>

            {currentStep === 4 && (
              <div className="line">
                <Step4
                  formData={formData}
                  setFormData={setFormData}
                  finalized={finalized}
                  setFinalized={(val) => {
                    setFinalized(val);
                    if (val) markStepComplete(4);
                  }}
                />
              </div>
            )}
          </div>
          {/* end step-card */}
        </div>{" "}
        {/* end steps-container */}
      </div>
    </div>
  );
};

export default LeftPanel;
