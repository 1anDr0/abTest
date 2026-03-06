export default function RightPanel({ currentStep, formData }) {
  return (
    <div className="rightpanel-container">
      <h3>Din hypotes (utkast)</h3>

      <p>
        Vi har observerat att{" "}
        <b>
          {formData.observation ||
            "Exempel: 25% av användare inte klickar på CTA-knappen"}
        </b>
        , vilket bekräftas av <b>{formData.evidence || ""}</b>.
      </p>
      <p>
        Detta tyder på att{" "}
        <b>
          {formData.problem ||
            "användare missar knappen eller inte förstår vad nästa steg är"}
        </b>
        .
        <p>
          Vi tror därför att om vi{" "}
          <b>
            {" "}
            {formData.change ||
              "ändra CTA-texten från “Slutför köp” till “Få din beställning idag"}{" "}
            för <b>{formData.target || ""} </b> på <b>{formData.where || ""}</b>
            kommer att <b>{formData.effect || ""}</b>
          </b>
        </p>
      </p>
    </div>
  );
}
