import { Box, Chip } from '@mui/material';

export default function TimelineTitle({ title }) {
  return (
    <Box>
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: '8px',
          height: '8px',
          background: '#AAAAAA',
          borderRadius: '50%',
        }}
      />
      <Box component="span" sx={{ marginLeft: '10px' }}>
        <Chip
          size="small"
          variant="outlined"
          label={title}
          sx={{ color: '#FF851B', fontWeight: 'bold' }}
        />
      </Box>
    </Box>
  );
}
