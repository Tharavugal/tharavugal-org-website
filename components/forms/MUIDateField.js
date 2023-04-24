import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "@opentf/react-form";

export default function MUIDateField({ name, label, ...otherProps }) {
  const { field, error, setValue } = useField(name);
  return (
    <DatePicker
      {...field}
      readOnly={Boolean(otherProps.readOnly)}
      disabled={Boolean(otherProps.disabled)}
      label={label}
      error={Boolean(error)}
      helperText={error}
      renderInput={(params) => (
        <TextField sx={{ mt: 2 }} size="small" {...params} />
      )}
      onChange={(newValue) => setValue(newValue)}
      inputFormat="dd-MM-yyyy"
    />
  );
}
