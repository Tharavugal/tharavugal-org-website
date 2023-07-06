import { Box, Card, CardContent, Chip, Paper, Typography } from '@mui/material';

export default function WorkLevelColumn({ level }) {
  return (
    <Paper
      square
      sx={{
        width: '300px',
        display: 'inline-block',
        mx: 2,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          backgroundColor: (t) => t.palette.primary.light,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        {level.title.toUpperCase()}
      </Typography>
      <Box sx={{ p: 2 }}>
        {level.list.map((li, i) => (
          <Card key={i} variant="outlined" sx={{ mb: 1 }}>
            <CardContent>
              <Typography variant="body1" fontWeight="bold">
                {li.title}
              </Typography>
              <Box mt={2}>
                Priority:{' '}
                <Chip
                  size="small"
                  label={li.priority}
                  color={
                    li.priority === 'High'
                      ? 'error'
                      : li.priority === 'Medium'
                      ? 'warning'
                      : 'info'
                  }
                  sx={{ fontWeight: 'bold' }}
                />
              </Box>
              <Box mt={2}>
                {li.tags.map((t, ti) => (
                  <Chip key={ti} label={t} size="small" sx={{ mr: 1 }} />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Paper>
  );
}
