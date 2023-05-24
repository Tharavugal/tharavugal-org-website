import { Alert, Box, Divider, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';

export default function FeaturedVisualizations() {
  return (
    <Box p={1}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <ChevronRightIcon /> Featured
      </Typography>
      <Divider />
      <Box mt={1}>
        <Alert severity="info">No Data.</Alert>
      </Box>
    </Box>
  );
}
