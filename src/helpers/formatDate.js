import { format } from "date-fns";

export const formatDate = (date) => {
  return format(date, "PPP");
};

export const formatYear = (date) => {
  if (!date) return "";
  return format(date, "y");
};
