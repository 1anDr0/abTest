import "./Step1.css";
import { TbCircleNumber1 } from "react-icons/tb";

const Step1 = ({ formData, setFormData }) => {
  return (
    <div className="steps">
      <h1>
        <TbCircleNumber1 />
        Insikt / Observation
      </h1>
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
