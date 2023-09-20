import {
  Box,
  Card,
  CardContent,
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
      <CardContent>
        <Box>
          {data.locations.map((l, i) => (
            <Chip
              key={i}
              label={l}
              sx={{ mt: { xs: 1 }, mr: '2px' }}
              size="small"
            />
          ))}
        </Box>
        {data.categories && (
          <Box sx={{ mt: 2 }}>
            {data.categories.map((c, i) => (
              <Chip
                variant="outlined"
                color="info"
                key={i}
                label={c}
                sx={{ mt: { xs: 1 }, mr: '2px' }}
                size="small"
              />
            ))}
          </Box>
        )}
        <Box mt={1} sx={{ textAlign: 'right' }}>
          <Typography variant="span" fontSize={12} color="text.secondary">
            {format(new Date(data.startedAt), 'yyyy-MM-dd hh:mm:ss aa')}{' '}
            {data.startTz}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
