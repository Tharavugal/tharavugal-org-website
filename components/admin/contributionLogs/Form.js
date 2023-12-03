import { Box, Button } from '@mui/material';
import { Form as OTFForm } from '@opentf/react-form';
import { contributionLogsSchema } from '@/schema';
import zodErrors from '@/utils/zodErrors';
import UploadField from '@/components/forms/mui/UploadField';
import MUITextField from '@/components/forms/MUITextField';
import MUISelectField from '@/components/forms/MUISelectField';
import { useFieldArray } from '@opentf/react-form';
import MUIDateField from '@/components/forms/MUIDateField';

const ROLES = ['Public'];

const ContributorssField = () => {
  const { fields, push, remove } = useFieldArray('contributors');
  const items = fields.map((f, i) => (
    <fieldset style={{ marginTop: '10px' }} key={i}>
      <legend>Contributor - {i + 1}</legend>
      <Box>
        <MUITextField name={`${f}.name`} label="Name" />
      </Box>

      <Box mt={2}>
        <MUISelectField name={`${f}.role`} label="Role" options={ROLES} />
      </Box>

      <br />
      <button type="button" onClick={() => remove(i)}>
        ❌ Remove
      </button>
      <br />
    </fieldset>
  ));
  return (
    <Box>
      <Box>{items}</Box>
      <br />
      <button type="button" onClick={() => push({ name: '', ingredients: [] })}>
        Add Contributor
      </button>
    </Box>
  );
};

export default function Form({ initialValues, onSubmit, update = false }) {
  return (
    <Box>
      <OTFForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={(values) => zodErrors(contributionLogsSchema, values)}
      >
        <Box>
          <MUITextField name="title" label="Title" />
        </Box>

        <Box mt={2}>
          <UploadField
            name="image"
            label="Image"
            uploadPath="contribution_logs"
          />
        </Box>

        <Box>
          <ContributorssField />
        </Box>

        <Box mt={2}>
          <MUIDateField name="contributionDate" label="Contribution Date" />
        </Box>
        <Box mt={2}>
          <Button variant="contained" size="small" type="submit">
            {update ? 'Update' : 'Add'}
          </Button>
        </Box>
      </OTFForm>
    </Box>
  );
}
