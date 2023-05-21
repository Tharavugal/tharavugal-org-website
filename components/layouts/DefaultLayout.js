import { Backdrop, Box, Toolbar } from '@mui/material';
import AppHeader from './AppHeader';
import { InfinitySpin } from 'react-loader-spinner';
import { useAppState } from '@/store';

export default function DefaultLayout({ children }) {
  const isLoading = useAppState((s) => s.loading);

  return (
    <Box sx={{ height: '100%' }}>
      <AppHeader />
      <Toolbar variant="dense" />
      <Box
        p={3}
        pb={15}
        sx={{ minHeight: 'calc(100% - 50px)' }}
        bgcolor="#E7EBF0"
      >
        {children}
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <InfinitySpin width="200" color="#FF851B" />
      </Backdrop>
      <Box component="footer">
        <Box
          textAlign="center"
          sx={{ bgcolor: 'text.primary', color: 'white', p: 3 }}
        >
          © 2023 Tharavugal.org
        </Box>
      </Box>
    </Box>
  );
}
