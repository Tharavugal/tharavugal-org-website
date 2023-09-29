import APIClient from '@/utils/APIClient';
import { Box, Button } from '@mui/material';
import { useField } from '@opentf/react-form';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function UploadField({ name, label, uploadPath }) {
  const { field, error } = useField(name);
  const [state, setState] = useState({
    file: null,
    isUploading: false,
  });

  const handleChange = async (e) => {
    setState({ file: e.target.files[0] });
  };

  const handleUpload = async () => {
    setState({ ...state, isUploading: true });
    const key =
      uploadPath + '/' + uuidv4() + '.' + state.file.name.split('.').pop();
    const urlRes = await APIClient.post('/api/uploads', { key });
    try {
      const res = await fetch(urlRes.data.url, {
        method: 'PUT',
        body: state.file,
        mode: 'cors',
      });
      setState({ ...state, isUploading: false });
      field.onChange(key);
    } catch (error) {
      console.log(error);
    }
  };

  const renderUploadBtn = () => {
    if (state.file) {
      return (
        <Button variant="outlined" size="small" onClick={handleUpload}>
          {state.isUploading ? 'Uploading...' : 'Upload'}
        </Button>
      );
    }
  };

  return (
    <Box
      component="fieldset"
      sx={{
        borderColor: Boolean(error) ? (t) => t.palette.error.light : 'gray',
      }}
    >
      <legend>{label}</legend>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <input type="file" onChange={handleChange} />
        {renderUploadBtn()}
      </Box>
      {field.value && <Box mt={2}>✔️ {field.value}</Box>}
    </Box>
  );
}
