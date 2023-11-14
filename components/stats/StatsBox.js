import { Card, CardContent, Typography } from '@mui/material';

export default function StatsBox({ name, count }) {
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
        <Typography
          variant="subtitle1"
          sx={{ color: (theme) => theme.palette.info.main }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
