import moment from 'moment';

export class DateUtils {
  static parseDate(dateInput: string): Date {
    return moment(dateInput, 'YYYY-MM-DD hh:mm A').toDate();
  }

  static addDays(date: Date, days: number): Date {
    return moment(date).add(days, 'days').toDate();
  }

  static formatDate(date: Date): string {
    return moment(date).format('YYYY-MM-DD');
  }
}
