import "./Step4.css";

const Step4 = ({ formData, setFormData }) => {
  return (
    <div className="steps">
      <label>Vad ska påverkas? </label>
      <select
        value={formData.effect}
        onChange={(e) => setFormData({ ...formData, effect: e.target.value })}
      >
        <option value="Klickfrekvensen">Klickfrekvensen</option>
      </select>
    </div>
  );
};

export default Step4;
