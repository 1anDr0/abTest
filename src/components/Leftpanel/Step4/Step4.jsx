import styles from "./Step4.module.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Step4 = ({ formData, setFormData, finalized, setFinalized }) => {
  const complete = formData.effect && formData.effect.trim() !== "";

  const handleFinish = () => {
    // clicking always finalizes, even if effect is blank; keeps logic simple
    setFinalized(true);
  };

  return (
    <div className={styles.steps}>
      <label>Vad ska påverkas? (Primär KPI)</label>
      <select
        value={formData.effect}
        onChange={(e) => setFormData({ ...formData, effect: e.target.value })}
      >
        <option value="">Välj effekt...</option>
        <option value="Klickfrekvensen">Klickfrekvensen</option>
      </select>

      <label>Vad förväntar du dig att förändringen gör med KPI:n?</label>
      <div className={styles.radioGroup}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="direction"
            value="increase"
            checked={formData.direction === "increase"}
            onChange={(e) =>
              setFormData({ ...formData, direction: e.target.value })
            }
          />
          Öka <FaArrowUp />
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="direction"
            value="decrease"
            checked={formData.direction === "decrease"}
            onChange={(e) =>
              setFormData({ ...formData, direction: e.target.value })
            }
          />
          Minska <FaArrowDown />
        </label>
      </div>

      <button
        className={styles.finishBtn}
        disabled={finalized}
        onClick={handleFinish}
      >
        {finalized ? "Hypotes slutförd" : "Slutför hypotes"}
      </button>
    </div>
  );
};

export default Step4;
