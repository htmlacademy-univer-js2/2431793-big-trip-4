import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(duration);

const TimePeriods = {
  minInHour: 60,
  minInDay: 1440,
  minInYear: 525600
};

function humanizeDate(date, format) {
  return date ? dayjs(date).format(format) : dayjs().format(format);
}

function getDuration(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom), 'minute');

  if (timeDiff >= TimePeriods.minInYear) {
    return dayjs.duration(timeDiff, 'minutes').format('YY[Y] DD[D] HH[H] mm[M]');
  } else if (timeDiff >= TimePeriods.minInDay) {
    return dayjs.duration(timeDiff, 'minutes').format('DD[D] HH[H] mm[M]');
  } else if (timeDiff >= TimePeriods.minInHour) {
    return dayjs.duration(timeDiff, 'minutes').format('HH[H] mm[M]');
  } else {
    return dayjs.duration(timeDiff, 'minutes').format('mm[M]');
  }
}

function isFutureDate(dateFrom) {
  return dayjs(dateFrom).isAfter(dayjs());
}

function isPastDate(dateTo) {
  return dayjs(dateTo).isBefore(dayjs());
}

function isPresentDate(dateFrom, dateTo) {
  const now = dayjs();
  return now.isSameOrAfter(dateFrom) && now.isSameOrBefore(dateTo);
}

export { humanizeDate, getDuration, isFutureDate, isPastDate, isPresentDate };
