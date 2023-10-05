import APIClient from '@/utils/APIClient';
import Form from './Form';
import useAlert from '@/hooks/useAlert';
import { contributionLogsSchema } from '@/schema';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function Edit({ record }) {
  const [state, setState] = useState({ loading: true, initialValues: null });

  const fetchRecord = async () => {
    const result = await APIClient.get(
      '/api/admin/contribution-logs/' + record.id
    );
    const initialValues = {
      ...result.data,
      contributionDate: new Date(result.data.contributionDate),
    };
    setState({ loading: false, initialValues });
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  const showAlert = useAlert();

  const handleSubmit = async (values) => {
    const result = await APIClient.post(
      '/api/admin/contribution-logs',
      contributionLogsSchema.safeParse(values).data,
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
