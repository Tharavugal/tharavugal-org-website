import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function StatsBox({ name, count }) {
  return (
    <Card variant="outlined" sx={{ m: 1, minWidth: '100px' }}>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3">{count}</Typography>
        <Typography variant="subtitle1">{name}</Typography>
      </CardContent>
    </Card>
  );
}

export default function Stats({ data }) {
  return (
    <Box p={1}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <ChevronRightIcon /> Stats
      </Typography>
      <Divider />

      <Box mt={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <StatsBox name="Real-Time Events" count={data.totalEvents} />
        <StatsBox name="Tags" count={data.totalTags} />
        <StatsBox name="Locations" count={data.totalLocations} />
      </Box>
    </Box>
  );
}
