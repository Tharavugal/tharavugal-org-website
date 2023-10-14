import { Form as OTFForm } from '@opentf/react-form';
import MUITextField from '../forms/MUITextField';
import { Box, Button } from '@mui/material';
import MUIAsyncSelectField from '../forms/MUIAsyncSelect';

export default function ExploreForm({ initialValues, onSubmit }) {
  return (
    <OTFForm
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <MUITextField name="text" label="Text" />
      <Box mt={2}>
          <MUIAsyncSelectField
            name="tags"
            label="Tags"
            url="/api/event-categories"
            multiple
          />
        </Box>
      <Box mt={2}>
          <MUIAsyncSelectField
            name="locations"
            label="Locations"
            url="/api/event-locations"
            multiple
          />
        </Box>
      <Button
        variant="contained"
        size="medium"
        fullWidth
        sx={{ mt: 2 }}
        type="submit"
      >
        Filter
      </Button>
    </OTFForm>
  );
}
