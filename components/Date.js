import { parseISO, format } from "date-fns";

export default function Date({ dateString = "2023" }) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "yyyy-dd-MM")}</time>;
}
