import { Box, Chip } from '@mui/material';

export default function TimelineTitle({ title }) {
  return (
    <Box>
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: '11px',
          height: '11px',
          background: '#AAAAAA',
          borderRadius: '50%',
        }}
      />
      <Box component="span" sx={{ marginLeft: '10px' }}>
        <Chip color="primary" size="small" variant="outlined" label={title} />
      </Box>
    </Box>
  );
}
