import styles from "./Step2.module.css";

const Step2 = ({ formData, setFormData }) => {
  return (
    <div className={styles.steps}>
      <label>Vad är problemet?</label>
      <textarea
        value={formData.problem}
        onChange={(e) =>
          setFormData({
            ...formData,
            problem:
              e.target.value.charAt(0).toLowerCase() + e.target.value.slice(1),
          })
        }
        placeholder="Exempel: Användare uppfattar inte CTA:n som relevant eller värdefull i första intrycket"
        rows={4}
      />
    </div>
  );
};

export default Step2;
