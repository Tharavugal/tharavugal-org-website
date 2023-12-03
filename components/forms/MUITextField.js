import { TextField } from '@mui/material';
import { useField } from '@opentf/react-form';

export default function MUITextField({ name, label, ...otherProps }) {
  const { field, error } = useField(name);

  return (
    <TextField
      fullWidth
      size="small"
      disabled={Boolean(otherProps.disabled)}
      error={Boolean(error)}
      label={label}
      helperText={error}
      InputProps={{
        readOnly: otherProps.readOnly,
      }}
      sx={{ mt: 2 }}
      value={field.value}
      onChange={(e) => field.onChange(e.target.value)}
      onBlur={field.onBlur}
    />
  );
}
