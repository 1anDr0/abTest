import { FaRegQuestionCircle } from "react-icons/fa";
import styles from "./Step2.module.css";
import { useRef, useEffect } from "react";

const Step2 = ({ formData, setFormData }) => {
  const problemRef = useRef(null);
  useEffect(() => {
    if (problemRef.current) {
      problemRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.steps}>
      <div className={styles.labelRow}>
        <label className={styles.labelNoMargin}>
          Vad är problemet?
        </label>
        <span className={styles.tooltipWrapper}>
          <FaRegQuestionCircle />
          <span className={styles.tooltipText}>
            Formulera vilket problem observationen kan tyda på
          </span>
        </span>
      </div>
      <textarea
        ref={problemRef}
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
