import styles from "./Step3.module.css";

const Step3 = ({ formData, setFormData }) => {
  return (
    <div className={styles.steps}>
      <label>Vad har ni observerat?</label>
      <textarea
        value={formData.change}
        onChange={(e) => setFormData({ ...formData, change: e.target.value })}
        placeholder="Exempel: ändra CTA-texten från “Slutför köp” till “Få din beställning idag"
        rows={4}
      />

      <label>Vilken målgrupp gäller?</label>
      <select
        value={formData.target}
        onChange={(e) => setFormData({ ...formData, target: e.target.value })}
      >
        <option value="Alla användare">Alla användare</option>
      </select>
      <label>Var sker förndringen?</label>
      <select
        value={formData.where}
        onChange={(e) => setFormData({ ...formData, where: e.target.value })}
      >
        <option value="Startsida">Startsida</option>
      </select>
    </div>
  );
};

export default Step3;
