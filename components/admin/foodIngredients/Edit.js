import APIClient from '@/utils/APIClient';
import Form from './Form';
import useAlert from '@/hooks/useAlert';
import { foodIngredientsSchema } from '@/schema';
import { useEffect, useState } from 'react';

export default function Edit({ record }) {
  const [state, setState] = useState({ loading: true, initialValues: null });

  const fetchRecord = async () => {
    const result = await APIClient.get('/api/food-ingredients/' + record.id);
    const initialValues = {
      ...result.data,
      data: JSON.stringify(result.data.data, null, 2),
    };
    setState({ loading: false, initialValues });
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  const showAlert = useAlert();

  const handleSubmit = async (values) => {
    const result = await APIClient.post(
      '/api/food-ingredients',
      foodIngredientsSchema.safeParse(values).data,
      true
    );
    if (result.ok) {
      showAlert('success', result.data.message);
    } else {
      showAlert('error', result.data ? result.data.message : 'Failed!');
    }
  };

  if (state.loading) {
    return 'Loading...';
  }

  return (
    <Form initialValues={state.initialValues} onSubmit={handleSubmit} update />
  );
}
