export default function RightPanel({ currentStep, formData }) {
  return (
    <div className="rightpanel-container">
      <h3>Din hypotes (utkast)</h3>

      <p>
        Vi har observerat att <b>{formData.observation || "…"}</b>, vilket
        bekräftas av <b>{formData.evidence || "…"}</b>.
      </p>
    </div>
  );
}
