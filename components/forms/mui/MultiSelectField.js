import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import { useField } from '@opentf/react-form';

export default function MultiSelectField({ name, label, options }) {
  const { field, error } = useField(name, []);

  return (
    <Autocomplete
      multiple
      options={options}
      getOptionLabel={(option) => option.label}
      value={field.value}
      onChange={(e, v) => field.onChange(v)}
      onBlur={field.onBlur}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          error={Boolean(error)}
        />
      )}
    />
  );
}
