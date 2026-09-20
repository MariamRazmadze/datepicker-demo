import { proxy } from "valtio";
import type { DateFieldConfig } from "./types";

export const store = proxy<{ field: DateFieldConfig }>({
  field: {
    id: "appointment-date",
    label: "Appointment Date",
    disableFutureDates: false,
    disablePastDates: true,
  },
});
