import { TextField } from '@mui/material';
import { useField } from '@open-tech-world/react-form';

export default function MUITextField({ name, label, type }) {
    const { field, error } = useField(name);
    return (
        <TextField
            fullWidth
            type={type}
            error={Boolean(error)}
            label={label}
            helperText={error}
            {...field}
        />
    );
};