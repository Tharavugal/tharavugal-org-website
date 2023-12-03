import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useField } from '@opentf/react-form';

export default function SwitchField({ name, label }) {
  const { field } = useField(name);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={Boolean(field.value)}
            onChange={(e) => field.onChange(Boolean(e.target.checked))}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}
