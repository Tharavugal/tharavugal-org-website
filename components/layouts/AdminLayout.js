import { Box, Toolbar } from '@mui/material';
import AppHeader from './AppHeader';

export default function AdminLayout({ children }) {
  return (
    <>
      <AppHeader />
      <Toolbar variant="dense" />
      <Box>
        {children}
      </Box>
    </>
  );
}
