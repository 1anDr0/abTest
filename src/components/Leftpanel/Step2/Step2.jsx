import "./Step2.css";

const Step2 = ({ formData, setFormData }) => {
  return (
    <div className="steps">
      <label>Vad är problemet?</label>
      <textarea
        value={formData.problem}
        onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
        placeholder="Exempel: Användare uppfattar inte CTA:n som relevant eller värdefull i första intrycket"
        rows={4}
      />
    </div>
  );
};

export default Step2;
