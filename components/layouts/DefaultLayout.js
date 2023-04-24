import { Box, Toolbar } from '@mui/material';
import AppHeader from './AppHeader';

export default function DefaultLayout({ children }) {
  return (
    <>
      <AppHeader />
      <Toolbar variant="dense" />
      <Box p={3} pb={15} bgcolor="#E7EBF0">
        {children}
      </Box>
      <Box component="footer">
        <Box
          textAlign="center"
          sx={{ bgcolor: 'text.primary', color: 'white', p: 3 }}
        >
          © 2023 Tharavugal.org
        </Box>
      </Box>
    </>
  );
}
