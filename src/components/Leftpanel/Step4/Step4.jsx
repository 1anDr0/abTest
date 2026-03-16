import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUp, FaArrowDown, FaRegQuestionCircle } from "react-icons/fa";
import styles from "./Step4.module.css";
import { useRef, useEffect } from "react";

const Step4 = ({ formData, setFormData, finalized, setFinalized }) => {
  // Kontrollera om en riktig KPI är vald
  const isKpiSelected =
    formData.effect &&
    formData.effect !== "" &&
    formData.effect !== "Välj KPI/effekt" &&
    (formData.effect !== "Annat" ||
      (formData.effectCustom && formData.effectCustom.trim() !== ""));

  const complete = formData.effect && formData.effect.trim() !== "";

  const handleFinish = () => {
    if (!isKpiSelected) return; // Förhindra klick om ingen KPI är vald
    setTimeout(() => {
      setFinalized(true);
    }, 200);
  };

  const effectRef = useRef(null);
  useEffect(() => {
    if (effectRef.current) {
      effectRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.steps}>
      <div className={styles.labelRow}>
        <label className={styles.labelNoMargin}>
          Vad ska påverkas? (Primär KPI)
        </label>
        <span className={styles.tooltipWrapper}>
          <FaRegQuestionCircle />
          <span className={styles.tooltipText}>
            Välj vilken KPI (Key Performance Indicator) eller mätbart resultat
            förändringen ska påverka.
          </span>
        </span>
      </div>
      <div className={styles.selectWrapper}>
        <select
          value={formData.effect}
          onChange={(e) => {
            const value = e.target.value;
            setFormData({
              ...formData,
              effect: value,
              effectCustom: "",
            });
          }}
        >
          <option value="">Välj KPI/effekt</option>
          <option value="Klickfrekvensen">Klickfrekvensen</option>
          <option value="Konverteringsgrad">Konverteringsgrad</option>
          <option value="Genomsnittligt ordervärde">
            Genomsnittligt ordervärde
          </option>
          <option value="Avvisningsfrekvens">Avvisningsfrekvens</option>
          <option value="Tid på sidan">Tid på sidan</option>
          <option value="Antal köp">Antal köp</option>
          <option value="Annat">Annat</option>
        </select>
        <span className={styles.selectIcon}>
          <IoIosArrowDown />
        </span>
      </div>
      {formData.effect === "Annat" && (
        <>
          <div className={styles.labelRow}>
            <label className={styles.labelNoMargin}>Beskriv effekt</label>
            <span className={styles.tooltipWrapper}>
              <FaRegQuestionCircle />
              <span className={styles.tooltipText}>
                Ange en egen KPI – alltså vilket mätbart resultat ni vill följa,
                t.ex. antal registreringar eller scroll-djup.
              </span>
            </span>
          </div>
          <textarea
            ref={effectRef}
            value={formData.effectCustom || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                effectCustom:
                  e.target.value.charAt(0).toLowerCase() +
                  e.target.value.slice(1),
              })
            }
            placeholder="Ange egen KPI/effekt"
            rows={2}
          />
        </>
      )}

      <div className={styles.labelRow}>
        <label className={styles.labelNoMargin}>
          Vad förväntar du dig att förändringen gör med KPI:n?
        </label>
        <span className={styles.tooltipWrapper}>
          <FaRegQuestionCircle />
          <span className={styles.tooltipText}>
            Välj om du tror att KPI:n kommer att öka eller minska.
          </span>
        </span>
      </div>
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

      {!finalized ? (
        <button
          className={styles.finishBtn}
          disabled={!isKpiSelected}
          onClick={handleFinish}
        >
          Slutför hypotes
        </button>
      ) : (
        <button
          className={styles.finishBtn}
          onClick={() => setFinalized(false)}
        >
          Redigera hypotes
        </button>
      )}
    </div>
  );
};

export default Step4;
