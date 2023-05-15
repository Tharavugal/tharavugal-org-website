import { Box, Button, TextField } from '@mui/material';
import { Form, useField, useFormContext } from '@opentf/react-form';

import { eventsSchema } from '@/schema';
import zodErrors from '@/utils/zodErrors';
import CodeInputField from '@/components/forms/CodeInputField';
import MUITextField from '@/components/forms/MUITextField';
import MUIDateField from '@/components/forms/MUIDateField';
import MUITimeField from '@/components/forms/MUITimeField';
import MUIAutoCompleteField from '@/components/forms/MUIAutoCompleteField';
import MUIAsyncSelectField from '@/components/forms/MUIAsyncSelect';
import { useEffect } from 'react';

function slugify(str) {
  str = str.replaceAll('.', '-');
  return str.trim().replaceAll(' ', '-').toLowerCase();
}

function SlugField({ name, label }) {
  const { field } = useField(name);
  const { values } = useFormContext();

  useEffect(() => {
    field.onChange(slugify(values.title));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.title]);

  return (
    <TextField
      InputProps={{ readOnly: true }}
      fullWidth
      size="small"
      label={label}
      sx={{ mt: 2 }}
      value={field.value}
    />
  );
}

export default function EventsForm({
  initialValues,
  onSubmit,
  update = false,
}) {
  const tzOptions = [
    '-12:00',
    '-11:00',
    '-10:00',
    '-09:30',
    '-09:00',
    '-8:00',
    '-7:00',
    '-06:00',
    '-05:00',
    '-04:00',
    '-03:30',
    '-03:00',
    '-02:00',
    '-01:00',
    '+00:00',
    '+01:00',
    '+02:00',
    '+03:00',
    '+03:30',
    '+04:00',
    '+04:30',
    '+05:00',
    '+05:30',
    '+05:45',
    '+06:00',
    '+06:30',
    '+07:00',
    '+08:00',
    '+08:45',
    '+09:00',
    '+09:30',
    '+10:00',
    '+10:30',
    '+11:00',
    '+12:00',
    '+12:45',
    '+13:00',
    '+14:00',
  ];

  return (
    <Box>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={(values) => zodErrors(eventsSchema, values)}
      >
        <Box>
          <MUITextField name="title" label="Title" />
        </Box>
        <Box>
          <SlugField name="slug" label="Slug" />
        </Box>
        <Box mt={2}>
          <MUIDateField name="startDate" label="Start Date" />
        </Box>
        <Box mt={2}>
          <MUITimeField name="startTime" label="Start Time" />
        </Box>
        <Box mt={2}>
          <MUIAutoCompleteField
            name="startUTCOffset"
            label="Start UTC Offset"
            options={tzOptions}
          />
        </Box>
        <Box mt={2}>
          <MUIDateField name="endDate" label="End Date" />
        </Box>
        <Box mt={2}>
          <MUITimeField name="endTime" label="End Time" />
        </Box>
        <Box mt={2}>
          <MUIAutoCompleteField
            name="endUTCOffset"
            label="End UTC Offset"
            options={tzOptions}
          />
        </Box>
        <Box mt={2}>
          <MUIAsyncSelectField
            name="categories"
            label="Categories"
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
          <CodeInputField name="data" lang="JSON" label="Data" />
        </Box>
        <Box mt={2}>
          <Button variant="contained" size="small" type="submit">
            {update ? 'Update' : 'Add'}
          </Button>
        </Box>
      </Form>
    </Box>
  );
}
