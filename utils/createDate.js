import { format } from 'date-fns';

export default function createDate(date, time, utcOffset) {
  const startStr = `${format(date, 'yyyy')}-${format(date, 'MM')}-${format(
    date,
    'dd'
  )}T${format(time, 'HH')}:${format(time, 'mm')}:${format(
    time,
    'ss'
  )}.000${utcOffset}`;

  return new Date(startStr);
}
