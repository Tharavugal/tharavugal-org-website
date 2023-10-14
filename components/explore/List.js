import { Box } from '@mui/material';
import Event from '../Events/Event';

export default function List({ events }) {
  return (
    <Box>
      {events.map((ev, i) => (
        <Event key={i} data={ev} />
      ))}
    </Box>
  );
}
