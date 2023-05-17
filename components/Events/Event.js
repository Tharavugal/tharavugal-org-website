import {
  Box,
  Card,
  CardActions,
  CardHeader,
  Chip,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import ActionMenu from './ActionMenu';

export default function Event({ data }) {
  return (
    <Card variant="outlined" sx={{ mb: 1 }}>
      <CardHeader
        action={<ActionMenu />}
        title={
          <Typography component="a" fontSize={18} href={'/events/' + data.slug}>
            {data.title}
          </Typography>
        }
      />
      <CardActions>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 250px',
            width: '100%',
            overflow: 'auto',
          }}
        >
          <Box>
            {data.locations.map((l, i) => (
              <Chip key={i} label={l} sx={{ mr: '2px' }} size="small" />
            ))}
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="span" fontSize={12} color="text.secondary">
              {format(new Date(data.startedAt), 'yyyy-MM-dd hh:mm:ss aa')}{' '}
              {data.startTz}
            </Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}
