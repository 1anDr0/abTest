import styles from "./Step1.module.css";

const Step1 = ({ formData, setFormData }) => {
  const handleEvidenceChange = (e) => {
    const value = e.target.value;

    setFormData({
      ...formData,
      evidence: value,
      evidenceCustom: value === "Annat" ? formData.evidenceCustom || "" : "",
    });
  };

  return (
    <div className={styles.steps}>
      <label>Vad har ni observerat?</label>
      <textarea
        value={formData.observation}
        onChange={(e) =>
          setFormData({ ...formData, observation: e.target.value })
        }
        placeholder="Exempel: 25% av användare inte klickar på CTA-knappen"
        rows={4}
      />

      <label>Hur vet ni det?</label>
      <select value={formData.evidence} onChange={handleEvidenceChange}>
        <option value="">Välj källa...</option>
        <option value="Användartester">Användartester</option>
        <option value="Hotjar heatmaps">Hotjar heatmaps</option>
        <option value="GA4">GA4</option>
        <option value="Enkät">Enkät</option>
        <option value="Annat">Annat</option>
      </select>

      {formData.evidence === "Annat" && (
        <>
          <label>Beskriv källa</label>
          <textarea
            value={formData.evidenceCustom || ""}
            onChange={(e) =>
              setFormData({ ...formData, evidenceCustom: e.target.value })
            }
            placeholder="Skriv egen källa..."
            rows={3}
          />
        </>
      )}
    </div>
  );
};

export default Step1;
