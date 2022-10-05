import { Box, Button, Typography } from '@mui/material';
import { Form } from '@open-tech-world/react-form';

import MUITextField from '../components/MUITextField';

export default function SignIn() {
  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h4'>Sign In</Typography>
        <Form
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
          style={{ width: '300px' }}
        >
          <Box mt={2}>
            <MUITextField name="email" label="Email" type="email" />
          </Box>
          <Box mt={2}>
            <MUITextField name="password" label="Password" type="password" />
          </Box>
          <Box mt={2}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}