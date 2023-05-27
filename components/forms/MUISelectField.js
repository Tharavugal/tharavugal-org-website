import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useField } from '@opentf/react-form';

export default function MUISelectField({ name, label, options }) {
  const { field } = useField(name);

  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="chart-type-label">{label}</InputLabel>
      <Select
        labelId="chart-type-label"
        value={field.value}
        label={label}
        onChange={(e) => field.onChange(e.target.value)}
      >
        {options.map((o, i) => (
          <MenuItem key={i} value={o}>
            {o}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
