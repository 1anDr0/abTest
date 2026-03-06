import styles from "./Step4.module.css";

const Step4 = ({ formData, setFormData }) => {
  return (
    <div className={styles.steps}>
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
