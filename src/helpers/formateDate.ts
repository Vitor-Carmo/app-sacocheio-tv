import { MONTHS } from "../constants";

export default function formatDate(date: string) {
  const [day, month, year] = date.split("/");
  return `${day} ${MONTHS[Number(month) - 1]},  ${year}`;
}
