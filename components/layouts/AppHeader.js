import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppState } from '@/store';
import { USER_ROLES } from '@/constants';

function logout() {
  localStorage.clear();
  window.location = '/';
}

export default function AppHeader() {
  const router = useRouter();
  const user = useAppState((s) => s.user);

  return (
    <AppBar position="fixed">
      <Toolbar
        variant="dense"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{ fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => router.push('/')}
        >
          தரவுகள்
        </Typography>
        <div>
          {user && user.role === USER_ROLES.ADMIN && (
            <Box mr={2} component={Link} href="/admin" sx={{ color: 'white' }}>
              Dashboard
            </Box>
          )}
          {user && (
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              startIcon={<LogoutIcon />}
              onClick={() => logout()}
            >
              Sign Out
            </Button>
          )}
          {!user && (
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              startIcon={<LockIcon />}
              onClick={() => router.push('/signin')}
            >
              Sign in
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
