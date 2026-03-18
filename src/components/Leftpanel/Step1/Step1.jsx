import styles from "./Step1.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useRef, useEffect } from "react";

const Step1 = ({ formData, setFormData, showHeader, currentStep }) => {
  const handleEvidenceChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      evidence: value,
      evidenceCustom: value === "Annat" ? formData.evidenceCustom || "" : "",
    });
  };

  const obsRef = useRef(null);
  // Sätt fokus när headern stängs och Step1 visas
  // Sätt fokus ENDAST när showHeader går från true till false och currentStep är 1
  const prevShowHeader = useRef(showHeader);
  useEffect(() => {
    // Fokusera om header stängs (vanligt fall)
    if (
      prevShowHeader.current &&
      !showHeader &&
      currentStep === 1 &&
      obsRef.current
    ) {
      requestAnimationFrame(() => {
        obsRef.current && obsRef.current.focus();
      });
    }
    // Fokusera om global flagga är satt (t.ex. efter Kom igång)
    if (
      typeof window.focusStep1Textarea !== "undefined" &&
      window.focusStep1Textarea &&
      !showHeader &&
      currentStep === 1 &&
      obsRef.current
    ) {
      requestAnimationFrame(() => {
        obsRef.current && obsRef.current.focus();
        window.focusStep1Textarea = false;
      });
    }
    prevShowHeader.current = showHeader;
  }, [showHeader, currentStep]);

  return (
    <div className={styles.steps}>
      <div className={styles.labelRow}>
        <label className={styles.labelNoMargin}>Vad har ni observerat?</label>
        <span className={styles.tooltipWrapper}>
          <FaRegQuestionCircle />
          <span className={styles.tooltipText}>
            Beskriv något ni har observerat i data eller användarbeteende.
            Undvik tolkningar – skriv bara vad som händer.
          </span>
        </span>
      </div>
      <textarea
        ref={obsRef}
        value={formData.observation}
        disabled={showHeader}
        onFocus={() => {
          if (showHeader && typeof window.setShowHeader === "function") {
            window.setShowHeader(false);
          }
        }}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            observation:
              e.target.value.charAt(0).toLowerCase() + e.target.value.slice(1),
          }))
        }
        placeholder="Exempel: 25% av användare inte klickar på CTA-knappen"
        rows={3}
      />
      <div className={styles.labelRow}>
        <label className={styles.labelNoMargin}>Hur vet ni det?</label>
        <span className={styles.tooltipWrapper}>
          <FaRegQuestionCircle />
          <span className={styles.tooltipText}>
            Ange vilken källa eller data som stödjer er observation.
          </span>
        </span>
      </div>
      <div className={styles.selectWrapper}>
        <select
          value={formData.evidence}
          onChange={handleEvidenceChange}
          disabled={showHeader}
        >
          <option value="">Välj källa</option>
          <option value="Användartester">Användartester</option>
          <option value="Hotjar heatmaps">Hotjar heatmaps</option>
          <option value="Session recordings">Session recordings</option>
          <option value="Intervjuer">Intervjuer</option>
          <option value="Supportärenden">Supportärenden</option>
          <option value="a/b-testdata">A/B-testdata</option>
          <option value="crm-data">CRM-data</option>
          <option value="Feedback från användare">
            Feedback från användare
          </option>
          <option value="Loggfiler">Loggfiler</option>
          <option value="Google Analytics (GA4)">Google Analytics (GA4)</option>
          <option value="Enkät">Enkät</option>
          <option value="Annat">Annat</option>
        </select>
        <span className={styles.selectIcon}>
          <IoIosArrowDown />
        </span>
      </div>
      {formData.evidence === "Annat" && !showHeader && (
        <>
          <div className={styles.labelRow}>
            <label className={styles.labelNoMargin}>Beskriv källa</label>
            <span className={styles.tooltipWrapper}>
              <FaRegQuestionCircle />
              <span className={styles.tooltipText}>
                Här kan du beskriva källan mer i detalj, till exempel ett
                specifikt verktyg, en rapport eller metod.
              </span>
            </span>
          </div>
          <textarea
            value={formData.evidenceCustom || ""}
            disabled={showHeader}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                evidenceCustom:
                  e.target.value.charAt(0).toLowerCase() +
                  e.target.value.slice(1),
              }))
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
