import { useEffect, useState } from "react";
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
import { MdOutlineBuildCircle } from "react-icons/md";

const LeftPanel = ({
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
  finalized,
  setFinalized,
  showHeader,
  setShowHeader,
}) => {
  const [transitioningStep, setTransitioningStep] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [step4Open, setStep4Open] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.showHeader = showHeader;
    }
  }, [showHeader]);

  useEffect(() => {
    if (finalized) {
      setCompletedSteps([1, 2, 3, 4]);
    }
  }, [finalized]);

  const isStepComplete = (step) => {
    switch (step) {
      case 1: {
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
      }

      case 2:
        return formData.problem && formData.problem.trim() !== "";

      case 3: {
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
      }

      case 4: {
        const effectValue = (formData.effect || "").toLowerCase();
        const hasEffect =
          effectValue !== "" && effectValue !== "välj kpi/effekt";
        const needsEffectCustom = effectValue === "annat";
        const hasEffectCustom =
          !needsEffectCustom ||
          (formData.effectCustom && formData.effectCustom.trim() !== "");
        return hasEffect && hasEffectCustom;
      }

      default:
        return false;
    }
  };

  const allComplete = [1, 2, 3, 4].every(isStepComplete);
  const canGoNext = isStepComplete(currentStep);

  const markStepComplete = (step) => {
    setCompletedSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));
  };

  const goToNextStep = (step) => {
    markStepComplete(step);
    setTransitioningStep(step);

    setTimeout(() => {
      setCurrentStep(step + 1);
      setTransitioningStep(null);
    }, 300);
  };

  const handleStepClick = (step) => {
    if (showHeader || finalized) return;
    if (step <= currentStep || allComplete) {
      setCurrentStep(step);
    }
  };

  const handleStart = () => {
    setShowHeader(false);
    setCurrentStep(1);
    setFinalized(false);
    setCompletedSteps([]);
    setStep4Open(true);
  };

  return (
    <div className="leftpanel-wrapper">
      {showHeader && <Header visible={true} onOk={handleStart} />}

      <div className="leftpanel">
        <div className="steps-container">
          <div
            className={`step-card ${
              currentStep === 1
                ? showHeader
                  ? "collapsed disabled"
                  : "active"
                : "collapsed"
            } ${1 > currentStep && !allComplete ? "disabled" : ""} ${
              finalized ? "disabled finalized" : ""
            }`}
            style={finalized ? { cursor: "default" } : {}}
            onClick={() => {
              if (!showHeader && !finalized) {
                setCurrentStep(1);
              }
            }}
          >
            <div className="step-heading">
              {transitioningStep === 1 ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : currentStep === 1 && !showHeader ? (
                <MdOutlineBuildCircle className="step-icon active" />
              ) : completedSteps.includes(1) ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : (
                <TbCircleNumber1 className="step-icon" />
              )}
              <h2>Insikt / Observation</h2>
            </div>

            {currentStep === 1 && !showHeader && (
              <div className="line">
                <Step1
                  formData={formData}
                  setFormData={setFormData}
                  showHeader={showHeader}
                  currentStep={currentStep}
                />
                <button
                  className="next-btn"
                  disabled={!canGoNext}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (canGoNext) goToNextStep(1);
                  }}
                >
                  Nästa steg
                  <span className="next-arrow">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            )}
          </div>

          <div
            className={`step-card ${
              showHeader
                ? "collapsed disabled"
                : currentStep === 2
                  ? "active"
                  : "collapsed"
            } ${2 > currentStep && !allComplete ? "disabled" : ""} ${
              finalized ? "disabled finalized" : ""
            }`}
            style={finalized ? { cursor: "default" } : {}}
            onClick={() => handleStepClick(2)}
          >
            <div className="step-heading">
              {transitioningStep === 2 ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : currentStep === 2 ? (
                <MdOutlineBuildCircle className="step-icon active" />
              ) : completedSteps.includes(2) ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : (
                <TbCircleNumber2 className="step-icon" />
              )}
              <h2>Tolkning</h2>
            </div>

            {!showHeader && currentStep === 2 && (
              <div className="line">
                <Step2 formData={formData} setFormData={setFormData} />
                <button
                  className="next-btn"
                  disabled={!canGoNext}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (canGoNext) goToNextStep(2);
                  }}
                >
                  Nästa steg
                  <span className="next-arrow">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            )}
          </div>

          <div
            className={`step-card ${
              showHeader
                ? "collapsed disabled"
                : currentStep === 3
                  ? "active"
                  : "collapsed"
            } ${3 > currentStep && !allComplete ? "disabled" : ""} ${
              finalized ? "disabled finalized" : ""
            }`}
            style={finalized ? { cursor: "default" } : {}}
            onClick={() => handleStepClick(3)}
          >
            <div className="step-heading">
              {transitioningStep === 3 ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : currentStep === 3 ? (
                <MdOutlineBuildCircle className="step-icon active" />
              ) : completedSteps.includes(3) ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : (
                <TbCircleNumber3 className="step-icon" />
              )}
              <h2>Förändring</h2>
            </div>

            {!showHeader && currentStep === 3 && (
              <div className="line">
                <Step3 formData={formData} setFormData={setFormData} />
                <button
                  className="next-btn"
                  disabled={!canGoNext}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (canGoNext) goToNextStep(3);
                  }}
                >
                  Nästa steg
                  <span className="next-arrow">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            )}
          </div>

          <div
            className={`step-card ${
              showHeader
                ? "collapsed disabled"
                : currentStep === 4
                  ? "active"
                  : "collapsed"
            } ${4 > currentStep && !allComplete ? "disabled" : ""} ${
              finalized ? "disabled" : ""
            }`}
            onClick={() => handleStepClick(4)}
            style={finalized ? { cursor: "default" } : {}}
          >
            <div className="step-heading">
              {transitioningStep === 4 ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : finalized ? (
                <PiSealCheckBold
                  className={
                    currentStep === 4
                      ? "step-icon inactive"
                      : "step-icon completed"
                  }
                />
              ) : currentStep === 4 ? (
                <MdOutlineBuildCircle className="step-icon active" />
              ) : completedSteps.includes(4) ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : (
                <TbCircleNumber4 className="step-icon" />
              )}
              <h2 className={finalized ? "inactive-heading" : ""}>Effekt</h2>
            </div>

            {!showHeader && currentStep === 4 && step4Open && (
              <div className="line4">
                <Step4
                  formData={formData}
                  setFormData={setFormData}
                  finalized={finalized}
                  setFinalized={(val) => {
                    if (val) {
                      markStepComplete(4);
                      setTransitioningStep(4);
                      setTimeout(() => {
                        setFinalized(true);
                        setStep4Open(true);
                        setTransitioningStep(null);
                      }, 300);
                    } else {
                      setFinalized(false);
                    }
                  }}
                  setStepOpen={setStep4Open}
                  setCurrentStep={setCurrentStep}
                  setShowHeader={setShowHeader}
                  setCompletedSteps={setCompletedSteps}
                  setTransitioningStep={setTransitioningStep}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
