import { Paper, Typography, Divider, Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Event from './Event';

export default function Events({ data }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <ChevronRightIcon /> Events
      </Typography>
      <Divider />
      <Box sx={{ py: 3 }}>
        {data.map((e, i) => (
          <Event key={i} data={e} />
        ))}
      </Box>
    </Paper>
  );
}
