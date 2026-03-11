import "./RightPanel.css";

export default function RightPanel({ currentStep, formData, finalized }) {
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
                    : formData.evidence || ""}
                </b>
                .
              </p>
            </div>

            <div className={`hypothesis-step ${statusFor(2)}`}>
              <p>
                Detta tyder på att{" "}
                <b>
                  {formData.problem ||
                    "användare missar knappen eller inte förstår vad nästa steg är"}
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
                för <b>{formData.target || ""}</b> på{" "}
                <b>{formData.where || ""}</b>.
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
                <b>{formData.effect || "Klickfrekvensen"}</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
