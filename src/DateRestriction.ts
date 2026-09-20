import dayjs, { Dayjs } from "dayjs";

export const getDateRestriction = (
  disableFutureDates?: boolean,
  disablePastDates?: boolean,
) => {
  if (!disableFutureDates && !disablePastDates) return undefined;
  return (current: Dayjs) => {
    const today = dayjs().startOf("day");
    if (disableFutureDates && current.isAfter(today, "day")) return true;
    if (disablePastDates && current.isBefore(today, "day")) return true;
    return false;
  };
};
