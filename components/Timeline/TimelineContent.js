import { Box } from '@mui/material';

export default function TimelineContent({ children }) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '2px 1fr' }}>
      <Box
        sx={{
          margin: '5px 5px 15px 5px',
          background: 'rgb(189, 189, 189)',
          width: '2px',
        }}
      />
      <Box sx={{ margin: '20px' }}>{children}</Box>
    </Box>
  );
}
