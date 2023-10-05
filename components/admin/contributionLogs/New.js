import APIClient from '@/utils/APIClient';
import Form from './Form';
import { v4 as uuid } from 'uuid';
import useAlert from '@/hooks/useAlert';
import { contributionLogsSchema } from '@/schema';

export default function New({ onClose }) {
  const showAlert = useAlert();

  const handleSubmit = async (values) => {
    const result = await APIClient.post(
      '/api/admin/contribution-logs',
      contributionLogsSchema.safeParse(values).data
    );
    if (result.ok) {
      showAlert('success', result.data.message);
      onClose();
    } else {
      showAlert('error', result.data ? result.data.message : 'Failed!');
    }
  };

  return (
    <Form
      initialValues={{
        id: uuid(),
        title: '',
        image: '',
        contributors: [{ name: '', role: '' }],
        contributionDate: new Date(),
      }}
      onSubmit={handleSubmit}
    />
  );
}
