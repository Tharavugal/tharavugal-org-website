import { Paper, Typography, Divider, Box, Alert } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Event from './Event';
import Timeline from '../Timeline';
import TimelineTitle from '../Timeline/TimelineTitle';
import TimelineContent from '../Timeline/TimelineContent';

export default function Events({ data, styles }) {
  const renderEvents = () => {
    return data.map((g, i) => (
      <div key={i}>
        <TimelineTitle title={g._id} />
        <TimelineContent>
          {g.records.map((e, i) => (
            <Event key={i} data={e} />
          ))}
        </TimelineContent>
      </div>
    ));
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box mr={1} className={styles.blob + ' ' + styles.green} />
        Events
      </Typography>
      <Divider />
      <Box m={3}>
        <Timeline>{renderEvents()}</Timeline>
      </Box>
      <Alert severity="warning">Currently, organization members can view unlimited events.</Alert>
    </Paper>
  );
}
