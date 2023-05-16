import { format } from 'date-fns';

export default function createDate(date, time) {
  return `${format(date, 'yyyy')}-${format(date, 'MM')}-${format(
    date,
    'dd'
  )}T${format(time, 'HH')}:${format(time, 'mm')}:${format(time, 'ss')}.000`;
}
