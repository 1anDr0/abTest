import { useEffect, useRef, useState } from "react";
import "./Leftpanel.css";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Header from "./Header/Header";

// import Footer from "./Header/Footer";

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
}) => {
  // Header ska synas från start
  const [showHeader, setShowHeader] = useState(true);
  // Gör showHeader globalt så RightPanel kan läsa det
  if (typeof window !== "undefined") window.showHeader = showHeader;

  // Sätt finalized till true när headern visas (exempel)
  useEffect(() => {
    if (showHeader) {
      setFinalized(true);
    }
  }, [showHeader, setFinalized]);
  // Håller koll på vilka steg som är "avklarade" (när användaren tryckt Nästa)
  const [completedSteps, setCompletedSteps] = useState([]);
  // Counter för att tvinga remount av Step1 när headern stängs
  const step1KeyCounter = useRef(0);
  // State för att hantera om steg 4 är öppet
  const [step4Open, setStep4Open] = useState(true);

  useEffect(() => {
    if (!showHeader && currentStep === 1) {
      step1KeyCounter.current += 1;
    }
  }, [showHeader, currentStep]);

  // Mark all steps as completed when hypothesis is finalized
  useEffect(() => {
    if (finalized) {
      setCompletedSteps([1, 2, 3, 4]);
    }
  }, [finalized]);

  // Dölj header när observation fylls i
  useEffect(() => {
    if (
      showHeader &&
      formData.observation &&
      formData.observation.trim() !== ""
    ) {
      setShowHeader(false);
    }
  }, [formData.observation, showHeader]);

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
      {showHeader && (
        <Header
          visible={true}
          onOk={() => {
            setShowHeader(false);
            setCurrentStep(1);
            setFinalized(false);
            setCompletedSteps([]);
          }}
        />
      )}
      <div className="leftpanel">
        <div className="steps-container">
          {/* steg 1 */}
          <div
            className={`step-card ${
              currentStep === 1
                ? showHeader
                  ? "collapsed disabled"
                  : "active"
                : "collapsed"
            } ${1 > currentStep && !allComplete ? "disabled" : ""} ${finalized ? "disabled finalized" : ""}`}
            style={finalized ? { cursor: "default" } : {}}
            onClick={() => {
              if (!finalized) {
                setCurrentStep(1);
              }
            }}
          >
            <div className="step-heading">
              {currentStep === 1 ? (
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
            )}
          </div>
          {/* steg 2 */}
          <div
            className={`step-card ${showHeader ? "collapsed disabled" : currentStep === 2 ? "active" : "collapsed"} ${2 > currentStep && !allComplete ? "disabled" : ""} ${finalized ? "disabled finalized" : ""}`}
            style={finalized ? { cursor: "default" } : {}}
            onClick={() => {
              if (!showHeader && !finalized) handleStepClick(2);
            }}
          >
            <div className="step-heading">
              {currentStep === 2 ? (
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
                    if (canGoNext) {
                      markStepComplete(2);
                      setTimeout(() => setCurrentStep(3), 200);
                    }
                  }}
                >
                  Nästa steg{" "}
                  <span className="next-arrow">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            )}
          </div>
          {/* steg 3 */}
          <div
            className={`step-card ${showHeader ? "collapsed disabled" : currentStep === 3 ? "active" : "collapsed"} ${3 > currentStep && !allComplete ? "disabled" : ""} ${finalized ? "disabled finalized" : ""}`}
            style={finalized ? { cursor: "default" } : {}}
            onClick={() => {
              if (!showHeader && !finalized) handleStepClick(3);
            }}
          >
            <div className="step-heading">
              {currentStep === 3 ? (
                <MdOutlineBuildCircle className="step-icon active" />
              ) : completedSteps.includes(3) ? (
                <PiSealCheckBold className="step-icon completed" />
              ) : (
                <TbCircleNumber3 className="step-icon" />
              )}
              <h2>Förändring</h2>
            </div>
            {!showHeader && currentStep === 3 && (
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
            className={`step-card ${showHeader ? "collapsed disabled" : currentStep === 4 ? "active" : "collapsed"} ${4 > currentStep && !allComplete ? "disabled" : ""} ${finalized ? "disabled" : ""}`}
            onClick={() => {
              if (!showHeader && !finalized) handleStepClick(4);
            }}
          >
            <div className="step-heading">
              {finalized ? (
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
                    setFinalized(val);
                    if (val) markStepComplete(4);
                  }}
                  setStepOpen={setStep4Open}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LeftPanel;
