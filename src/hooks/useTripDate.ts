import { tripInfo } from "@/data/trip";
import { useLocalStorageString } from "./useLocalStorage";

export function useTripDate() {
  const [startDate, setStartDate] = useLocalStorageString(
    "trip-start-date",
    tripInfo.defaultStartDate
  );
  return { startDate, setStartDate };
}
