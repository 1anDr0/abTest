import { IoIosArrowDown } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import styles from "./Step3.module.css";
import { useRef, useEffect } from "react";

const Step3 = ({ formData, setFormData }) => {
  const changeRef = useRef(null);
  useEffect(() => {
    if (changeRef.current) {
      changeRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.steps}>
      <div className={styles.labelRow}>
        <label className={styles.labelNoMargin}>Beskriv förändring</label>
        <span className={styles.tooltipWrapper}>
          <FaRegQuestionCircle />
          <span className={styles.tooltipText}>
            Beskriv exakt vilken förändring ni vill testa, till exempel text,
            färg, placering eller funktion.
          </span>
        </span>
      </div>
      <textarea
        ref={changeRef}
        value={formData.change}
        onChange={(e) =>
          setFormData({
            ...formData,
            change:
              e.target.value.charAt(0).toLowerCase() + e.target.value.slice(1),
          })
        }
        placeholder="Exempel: ändra CTA-texten från “Slutför köp” till “Få din beställning idag”"
        rows={4}
      />

      <div className={styles.labelRow}>
        <label className={styles.labelNoMargin}>Vilken målgrupp gäller?</label>
        <span className={styles.tooltipWrapper}>
          <FaRegQuestionCircle />
          <span className={styles.tooltipText}>
            Välj vilken grupp av användare som förändringen ska testas på.
          </span>
        </span>
      </div>
      <div className={styles.selectWrapper}>
        <select
          value={formData.target}
          onChange={(e) => {
            const value = e.target.value;
            setFormData({
              ...formData,
              target: value,
              targetCustom: "",
            });
          }}
        >
          <option value="">Välj målgrupp</option>
          <option value="Alla användare">Alla användare</option>
          <option value="Nya användare">Nya användare</option>
          <option value="Återkommande användare">Återkommande användare</option>
          <option value="Mobila användare">Mobila användare</option>
          <option value="Desktop-användare">Desktop-användare</option>
          <option value="Kunder med rabattkod">Kunder med rabattkod</option>
          <option value="Besökare från kampanj">Besökare från kampanj</option>
          <option value="Annat">Annat</option>
        </select>
        <span className={styles.selectIcon}>
          <IoIosArrowDown />
        </span>
      </div>
      {formData.target === "Annat" && (
        <>
          <div className={styles.labelRow}>
            <label className={styles.labelNoMargin}>Beskriv målgrupp</label>
            <span className={styles.tooltipWrapper}>
              <FaRegQuestionCircle />
              <span className={styles.tooltipText}>
                Beskriv den specifika målgruppen, t.ex. "användare som besökt
                produktsidan mer än 3 gånger".
              </span>
            </span>
          </div>
          <textarea
            value={formData.targetCustom || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                targetCustom:
                  e.target.value.charAt(0).toLowerCase() +
                  e.target.value.slice(1),
              })
            }
            placeholder="Ange egen målgrupp"
            rows={2}
          />
        </>
      )}
      <div className={styles.labelRow}>
        <label className={styles.labelNoMargin}>Var sker förändringen?</label>
        <span className={styles.tooltipWrapper}>
          <FaRegQuestionCircle />
          <span className={styles.tooltipText}>
            Ange var på sidan eller i flödet förändringen sker.
          </span>
        </span>
      </div>
      <div className={styles.selectWrapper}>
        <select
          value={formData.where}
          onChange={(e) => {
            const value = e.target.value;
            setFormData({
              ...formData,
              where: value,
              whereCustom: "",
            });
          }}
        >
          <option value="">Välj plats på sidan</option>
          <option value="Startsida">Startsida</option>
          <option value="Produktlista">Produktlista</option>
          <option value="Produktsida">Produktsida</option>
          <option value="Kassan">Kassan</option>
          <option value="Tack-sida">Tack-sida</option>
          <option value="Kundvagn">Kundvagn</option>
          <option value="Kampanjsida">Kampanjsida</option>
          <option value="Annat">Annat</option>
        </select>
        <span className={styles.selectIcon}>
          <IoIosArrowDown />
        </span>
      </div>
      {formData.where === "Annat" && (
        <>
          <div className={styles.labelRow}>
            <label className={styles.labelNoMargin}>Beskriv plats</label>
            <span className={styles.tooltipWrapper}>
              <FaRegQuestionCircle />
              <span className={styles.tooltipText}>
                Beskriv platsen, t.ex. "överst på produktsidan" eller "i kassan
                efter adressformuläret".
              </span>
            </span>
          </div>
          <textarea
            value={formData.whereCustom || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                whereCustom:
                  e.target.value.charAt(0).toLowerCase() +
                  e.target.value.slice(1),
              })
            }
            placeholder="Ange egen plats"
            rows={2}
          />
        </>
      )}
    </div>
  );
};

export default Step3;
