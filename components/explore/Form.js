import { useEffect, useRef } from 'react';
import { Form as OTFForm } from '@opentf/react-form';
import MUITextField from '../forms/MUITextField';
import { Box, Button } from '@mui/material';
import MUIAsyncSelectField from '../forms/MUIAsyncSelect';
import { useRouter } from 'next/router';
import MUIDateField from '../forms/MUIDateField';
import MUISelectField from '../forms/MUISelectField';

export default function ExploreForm({ initialValues, onSubmit }) {
  const router = useRouter();
  const formRef = useRef(null);

  useEffect(() => {
    if (router.query) {
      if (router.query.location) {
        const values = {
          ...initialValues,
          locations: [router.query.location],
        };
        formRef.current.actions.reset(values);
        onSubmit(values);
      }
      if (router.query.tag) {
        const values = {
          ...initialValues,
          tags: [router.query.tag],
        };
        formRef.current.actions.reset(values);
        onSubmit(values);
      }
    }
  }, [router.query]);

  return (
    <OTFForm initialValues={initialValues} onSubmit={onSubmit} ref={formRef}>
      <MUITextField name="text" label="Search text" />

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

      <Box mt={2}>
        <MUIDateField name="from" label="From" />
      </Box>

      <Box mt={2}>
        <MUIDateField name="to" label="To" />
      </Box>

      <Box mt={2}>
        <MUISelectField
          name="sort"
          label="Sort"
          options={['Ascending', 'Descending']}
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
