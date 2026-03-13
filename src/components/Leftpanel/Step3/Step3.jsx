import { IoIosArrowDown } from "react-icons/io";
import styles from "./Step3.module.css";

const Step3 = ({ formData, setFormData }) => {
  return (
    <div className={styles.steps}>
      <label>Beskriv förändring</label>
      <textarea
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

      <label>Vilken målgrupp gäller?</label>
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
          <label>Beskriv målgrupp</label>
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
      <label>Var sker förändringen?</label>
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
          <label>Beskriv plats</label>
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
