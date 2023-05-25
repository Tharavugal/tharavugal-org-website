import {
  Backdrop,
  Box,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import AppHeader from './AppHeader';
import { InfinitySpin } from 'react-loader-spinner';
import { useAppState } from '@/store';
import Link from 'next/link';

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
      <Box
        component="footer"
        sx={{ bgcolor: 'text.primary', color: 'white', p: 3 }}
      >
        <Grid container px={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1" sx={{ textDecoration: 'underline' }}>
              ORGANIZATION
            </Typography>
            <Box mt={2}>
              <Box>
                <Box
                  component={Link}
                  href="/about-us"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  About Us
                </Box>
              </Box>
              <Box>
                <Box
                  component={Link}
                  href="/contact-us"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Contact Us
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: { xs: 2, sm: 0 } }} sm={6} md={4}>
            <Typography variant="body1" sx={{ textDecoration: 'underline' }}>
              USEFUL LINKS
            </Typography>
            <Box mt={2}>
              <Box>
                <Box
                  component={Link}
                  href="/faqs"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  FAQs
                </Box>
              </Box>
              <Box>
                <Box
                  component={Link}
                  href="https://github.com/Tharavugal/web"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Github
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: { xs: 2, sm: 0 } }} sm={6} md={4}>
            <Typography variant="body1" sx={{ textDecoration: 'underline' }}>
              LEGAL
            </Typography>
            <Box mt={2}>
              <Box>
                <Box
                  component={Link}
                  href="/terms-conditions"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Terms & Conditions
                </Box>
              </Box>
              <Box>
                <Box
                  component={Link}
                  href="/privacy-policy"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Privacy Policy
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }} textAlign="center">
          © 2023 Tharavugal.org
        </Box>
      </Box>
    </Box>
  );
}
