import "./Step1.css";

const Step1 = (formData, setFormData) => {
  return (
    <div className="steps">
      <h1>Insikt / Observation</h1>
      <label>Vad har ni observerat?</label>
      <textarea
        value={formData.observation}
        onChange={(e) =>
          setFormData({ ...formData, observation: e.target.value })
        }
        placeholder="Exempel: Endast 3% klickar på CTA-knappen i hero-sektionen på startsidan."
        rows={4}
      />

      <label>Hur vet ni det?</label>
      <select
        value={formData.evidence}
        onChange={(e) => setFormData({ ...formData, evidence: e.target.value })}
      >
        <option value="">Välj källa...</option>
        <option value="Användartester">Användartester</option>
        <option value="Hotjar heatmaps">Hotjar heatmaps</option>
        <option value="GA4">GA4</option>
        <option value="Enkät">Enkät</option>
        <option value="Annat">Annat</option>
      </select>
    </div>
  );
};

export default Step1;
