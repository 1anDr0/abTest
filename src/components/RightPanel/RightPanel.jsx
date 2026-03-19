import React, { useMemo, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import "./RightPanel.css";

export default function RightPanel({
  currentStep,
  formData,
  finalized,
  showHeader,
}) {
  const [copied, setCopied] = useState(false);

  const normalizeValue = (value, customValue, fallback = "") => {
    if (value === "Annat") return customValue?.trim() || fallback;
    if (!value) return fallback;
    return value.charAt(0).toLowerCase() + value.slice(1);
  };

  const content = useMemo(() => {
    return {
      observation:
        formData.observation || "25% av användare inte klickar på CTA-knappen",

      evidence: normalizeValue(
        formData.evidence,
        formData.evidenceCustom,
        "egen källa",
      ),

      problem:
        formData.problem ||
        "användare uppfattar inte CTA:n som relevant eller värdefull i första intrycket",

      change:
        formData.change ||
        "ändrar CTA-texten från “Slutför köp” till “Få din beställning idag”",

      target: normalizeValue(
        formData.target,
        formData.targetCustom,
        "ange egen målgrupp",
      ),

      where: normalizeValue(
        formData.where,
        formData.whereCustom,
        "ange egen plats",
      ),

      effect: normalizeValue(
        formData.effect,
        formData.effectCustom,
        "vald KPI",
      ),

      directionText:
        formData.direction === "increase"
          ? "öka"
          : formData.direction === "decrease"
            ? "minska"
            : "",
    };
  }, [formData]);

  const hypothesisText = `Vi har observerat att ${content.observation}, vilket bekräftas av ${content.evidence}.
Detta tyder på att ${content.problem}.
Vi tror därför att om vi ${content.change} för ${content.target} på ${content.where}, kommer att ${content.directionText} ${content.effect}.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hypothesisText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Kunde inte kopiera hypotesen:", error);
    }
  };

  const statusFor = (step) => {
    if (showHeader) return "inactive";

    if (finalized) return "completed";

    if (step === currentStep) return "current";
    if (step < currentStep) return "completed";

    return "inactive";
  };

  console.log({ currentStep, showHeader, finalized });

  return (
    <div className="rightpanel-container">
      <div className="header header-placeholder" />

      <div className="hypothesis-wrapper">
        <div className={`hypothesis-box${finalized ? " finalized" : ""}`}>
          <h3>
            {finalized ? "Hypotes (färdigställd)" : "Din hypotes (utkast)"}
          </h3>

          <div className="hypothesis-steps">
            <div className={`hypothesis-step ${statusFor(1)}`}>
              <p>
                Vi har observerat att <b>{content.observation}</b>, vilket
                bekräftas av <b>{content.evidence}</b>.
              </p>
            </div>

            <div className={`hypothesis-step ${statusFor(2)}`}>
              <p>
                Detta tyder på att <b>{content.problem}</b>.
              </p>
            </div>

            <div className={`hypothesis-step ${statusFor(3)}`}>
              <p>
                Vi tror därför att om vi <b>{content.change}</b> för{" "}
                <b>{content.target}</b> på <b>{content.where}</b>.
              </p>
            </div>

            <div className={`hypothesis-step ${statusFor(4)}`}>
              <p>
                kommer att{" "}
                {content.directionText && (
                  <span className="direction-text">
                    {content.directionText}
                  </span>
                )}
                <b>{content.effect}</b>.
              </p>
            </div>
          </div>

          {finalized && !showHeader && (
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
        <div className="header-powered-by">
          <span>Powered by</span>
          <img src="/maia-logo-white-19%20(1).png" alt="Powered by logo" />
        </div>
      </div>
    </div>
  );
}
