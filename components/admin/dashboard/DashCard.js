import { Card, CardContent, Typography } from '@mui/material';

export default function DashCard({ title, count }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h1">{count}</Typography>
        <Typography
          sx={{ fontSize: 14, textAlign: 'center' }}
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
