import { Box, Button } from '@mui/material';
import useSWR from 'swr';
import { Form } from '@opentf/react-form';

import { entitiesSchema } from '@/schema';
import zodErrors from '@/utils/zodErrors';
import MUIAutoCompleteField from '@/components/forms/MUIAutoCompleteField';
import CodeInputField from '@/components/forms/CodeInputField';

export default function EventCategoriesForm({
  initialValues,
  onSubmit,
  update = false,
}) {
  const {
    data: entityTypes,
    error,
    isLoading,
    mutate,
  } = useSWR('/api/entity-types');

  const typeOptions = entityTypes ? entityTypes.data.map((i) => i.name) : [];

  return (
    <Box>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={(values) => zodErrors(entitiesSchema, values)}
      >
        <Box>
          <MUIAutoCompleteField
            name="type"
            label="Type"
            options={typeOptions}
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
