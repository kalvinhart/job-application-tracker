import { format } from "date-fns";

export class DateService {
  format(date: Date, formatString: string): string {
    return format(date, formatString);
  }
}
