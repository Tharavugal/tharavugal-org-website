import { TextField, Autocomplete } from '@mui/material';
import { useField } from '@opentf/react-form';

export default function MUIAutoCompleteField({
  name,
  label,
  options,
  ...otherProps
}) {
  const { field, error } = useField(name);
  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 300, mt: 2 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={Boolean(error)}
          helperText={error}
        />
      )}
      size="small"
      value={field.value}
      onChange={(e, v) => field.onChange(v)}
      onBlur={field.onBlur}
      isOptionEqualToValue={(option, val) => {
        if (typeof option === 'string') {
          return option === val;
        }
        return option.value === (typeof val === 'string' ? val : val.value);
      }}
    />
  );
}
