import { DatePicker } from "antd";
import { useSnapshot } from "valtio";
import { store } from "./store";
import { getDateRestriction } from "./DateRestriction";

export const PreviwPanel = () => {
  const snap = useSnapshot(store);
  const { label, disableFutureDates, disablePastDates } = snap.field;
  return (
    <div style={{ marginBottom: 8 }}>
      {label}
      <DatePicker
        format="YYYY-MM-DD"
        disabledDate={getDateRestriction(disableFutureDates, disablePastDates)}
      />
    </div>
  );
};
