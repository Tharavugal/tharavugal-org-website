import APIClient from '@/utils/APIClient';
import Form from './Form';
import useAlert from '@/hooks/useAlert';
import { entitiesSchema } from '@/schema';

export default function Edit({ record }) {
  const initialValues = {
    ...record,
    data: JSON.stringify(record.data, null, 2),
  };
  const showAlert = useAlert();

  const handleSubmit = async (values) => {
    const result = await APIClient.post(
      '/api/entities',
      entitiesSchema.safeParse(values).data,
      true
    );
    if (result.ok) {
      showAlert('success', result.data.message);
    } else {
      showAlert('error', result.data ? result.data.message : 'Failed!');
    }
  };

  return <Form initialValues={initialValues} onSubmit={handleSubmit} update />;
}
