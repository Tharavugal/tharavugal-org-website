import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
          >
            தரவுகள்.org
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<LockIcon />}
            onClick={() => router.push('/signin')}
          >
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
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
