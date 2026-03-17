import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import "./RightPanel.css";

export default function RightPanel({ currentStep, formData, finalized }) {
  // State for copy feedback
  const [copied, setCopied] = useState(false);

  // Compose the hypothesis text for copying
  const hypothesisText = `Vi har observerat att ${formData.observation || "25% av användare inte klickar på CTA-knappen"}, vilket bekräftas av ${formData.evidence === "Annat" ? formData.evidenceCustom || "egen källa" : formData.evidence ? formData.evidence.charAt(0).toLowerCase() + formData.evidence.slice(1) : ""}.
      Detta tyder på att ${formData.problem || "Användare uppfattar inte CTA:n som relevant eller värdefull i första intrycket"}.
      Vi tror därför att om vi ${formData.change || "ändra CTA-texten från “Slutför köp” till “Få din beställning idag"} för ${formData.target === "Annat" ? formData.targetCustom || "ange egen målgrupp" : formData.target ? formData.target.charAt(0).toLowerCase() + formData.target.slice(1) : ""} på ${formData.where === "Annat" ? formData.whereCustom || "ange egen plats" : formData.where ? formData.where.charAt(0).toLowerCase() + formData.where.slice(1) : ""}, kommer att ${formData.direction === "increase" ? "öka" : "minska"} ${formData.effect === "Annat" ? formData.effectCustom || "Annat" : formData.effect ? formData.effect.charAt(0).toLowerCase() + formData.effect.slice(1) : ""}.`;

  // Handle copy to clipboard with delay
  const handleCopy = () => {
    setTimeout(() => {
      navigator.clipboard.writeText(hypothesisText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }, 200);
  };
  // derive status for each step: 'completed' (behind current), 'current', or 'inactive'
  const statusFor = (step) => {
    if (currentStep > step) return "completed";
    if (currentStep === step) return "current";
    return "inactive";
  };

  return (
    <div className="rightpanel-container">
      {/* spacer matching left header height */}
      <div className="header header-placeholder" />
      <div className="hypothesis-wrapper">
        <div className={`hypothesis-box${finalized ? " finalized" : ""}`}>
          <h3>
            {finalized ? "Din hypotes (färdigställd)" : "Din hypotes (utkast)"}
          </h3>

          <div className="hypothesis-steps">
            <div className={`hypothesis-step ${statusFor(1)}`}>
              <p>
                Vi har observerat att{" "}
                <b>
                  {formData.observation ||
                    "25% av användare inte klickar på CTA-knappen"}
                </b>
                , vilket bekräftas av{" "}
                <b>
                  {" "}
                  {formData.evidence === "Annat"
                    ? formData.evidenceCustom || "egen källa"
                    : formData.evidence
                      ? formData.evidence.charAt(0).toLowerCase() +
                        formData.evidence.slice(1)
                      : ""}
                </b>
                .
              </p>
            </div>

            <div className={`hypothesis-step ${statusFor(2)}`}>
              <p>
                Detta tyder på att{" "}
                <b>
                  {formData.problem ||
                    "användare uppfattar inte CTA:n som relevant eller värdefull i första intrycket"}
                </b>
                .
              </p>
            </div>

            <div className={`hypothesis-step ${statusFor(3)}`}>
              <p>
                Vi tror därför att om vi{" "}
                <b>
                  {formData.change ||
                    "ändra CTA-texten från “Slutför köp” till “Få din beställning idag"}
                </b>{" "}
                för{" "}
                <b>
                  {formData.target === "Annat"
                    ? formData.targetCustom || "ange egen målgrupp"
                    : formData.target
                      ? formData.target.charAt(0).toLowerCase() +
                        formData.target.slice(1)
                      : ""}
                </b>{" "}
                på{" "}
                <b>
                  {formData.where === "Annat"
                    ? formData.whereCustom || "ange egen plats"
                    : formData.where
                      ? formData.where.charAt(0).toLowerCase() +
                        formData.where.slice(1)
                      : ""}
                </b>
                .
              </p>
            </div>

            <div className={`hypothesis-step ${statusFor(4)}`}>
              <p>
                kommer att{" "}
                {formData.direction === "increase" && (
                  <span className="direction-text">öka</span>
                )}
                {formData.direction === "decrease" && (
                  <span className="direction-text">minska</span>
                )}
                <b>
                  {formData.effect === "Annat"
                    ? formData.effectCustom || "Annat"
                    : formData.effect
                      ? formData.effect.charAt(0).toLowerCase() +
                        formData.effect.slice(1)
                      : ""}
                </b>
                .
              </p>
            </div>
          </div>
          {finalized && (
            <div className="copy-hypothesis-bottom">
              <button
                className="copy-btn"
                onClick={handleCopy}
                title={copied ? "Kopierat!" : "Kopiera hypotesen"}
              >
                <FaRegCopy />
              </button>
              {copied && <span className="copy-feedback">Kopierat!</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
