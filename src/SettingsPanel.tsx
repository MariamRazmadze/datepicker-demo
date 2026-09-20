import { Checkbox } from "antd";
import { useSnapshot } from "valtio";
import { store } from "./store";

export const SettingsPanel = () => {
  const snap = useSnapshot(store);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Checkbox
        checked={snap.field.disableFutureDates}
        onChange={(e) => (store.field.disableFutureDates = e.target.checked)}
      >
        Disable Future Dates
      </Checkbox>
      <Checkbox
        checked={snap.field.disablePastDates}
        onChange={(e) => (store.field.disablePastDates = e.target.checked)}
      >
        Disable Past Dates
      </Checkbox>
    </div>
  );
};
