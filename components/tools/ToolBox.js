import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function ToolBox({ icon: Icon, label, path }) {
  const router = useRouter();

  return (
    <Box
      onClick={() => router.push(path)}
      sx={{
        width: '100px',
        minHeight: '100px',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid grey',
        borderRadius: '10px',
        cursor: 'pointer',
        m: 1,
        p: 1,
      }}
    >
      <Icon sx={{ fontSize: '35px', mt: '10px' }} />
      <Typography
        textAlign="center"
        mt={1}
        variant="body1"
        sx={{ userSelect: 'none' }}
        fontSize={14}
        color="secondary"
      >
        {label}
      </Typography>
    </Box>
  );
}
