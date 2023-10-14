import { Box } from '@mui/material';
import Event from '../Events/Event';

export default function List({ events }) {
  return (
    <Box sx={{ p: { xs: 1, sm: 1, md: 1 } }}>
      {events.map((ev, i) => (
        <Event key={i} data={ev} />
      ))}
    </Box>
  );
}
