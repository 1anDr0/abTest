import styles from "./Step1.module.css";
import { IoIosArrowDown } from "react-icons/io";

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
        rows={2}
      />

      <label>Hur vet ni det?</label>
      <div className={styles.selectWrapper}>
        <select value={formData.evidence} onChange={handleEvidenceChange}>
          <option value="">Välj källa</option>
          <option value="Användartester">Användartester</option>
          <option value="Hotjar heatmaps">Hotjar heatmaps</option>
          <option value="Session recordings">Session recordings</option>
          <option value="Intervjuer">Intervjuer</option>
          <option value="Supportärenden">Supportärenden</option>
          <option value="A/B-testdata">A/B-testdata</option>
          <option value="CRM-data">CRM-data</option>
          <option value="Feedback från användare">
            Feedback från användare
          </option>
          <option value="Loggfiler">Loggfiler</option>
          <option value="GA4">Google Analytics (GA4)</option>
          <option value="Enkät">Enkät</option>
          <option value="Annat">Annat</option>
        </select>
        <span className={styles.selectIcon}>
          <IoIosArrowDown />
        </span>
      </div>

      {formData.evidence === "Annat" && (
        <>
          <label>Beskriv källa</label>
          <textarea
            value={formData.evidenceCustom || ""}
            onChange={(e) =>
              setFormData({ ...formData, evidenceCustom: e.target.value })
            }
            placeholder="Skriv egen källa..."
            rows={2}
          />
        </>
      )}
    </div>
  );
};

export default Step1;
