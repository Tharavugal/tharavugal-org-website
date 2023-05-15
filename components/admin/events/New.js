import { set } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { produce } from 'immer';

import APIClient from '@/utils/APIClient';
import Form from './Form';
import useAlert from '@/hooks/useAlert';
import { eventsSchema } from '@/schema';
import createDate from '@/utils/createDate';

export default function New({ onClose }) {
  const showAlert = useAlert();
  const defaultTime = set(new Date(), {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const handleSubmit = async (values) => {
    let data = eventsSchema.safeParse(values).data;
    data = produce(data, (draft) => {
      draft.startedAt = createDate(
        draft.startDate,
        draft.startTime,
        draft.startUTCOffset
      );
      draft.endedAt = createDate(
        draft.endDate,
        draft.endTime,
        draft.endUTCOffset
      );
      draft.status = 'Draft';
      delete draft.startDate;
      delete draft.startTime;
      delete draft.startUTCOffset;
      delete draft.endDate;
      delete draft.endTime;
      delete draft.endUTCOffset;
    });
    const result = await APIClient.post('/api/events', data);
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
        slug: '',
        startDate: new Date(),
        startTime: defaultTime,
        startUTCOffset: '+05:30',
        endDate: new Date(),
        endTime: defaultTime,
        endUTCOffset: '+05:30',
        categories: [],
        locations: [],
        data: JSON.stringify({}, null, 2),
      }}
      onSubmit={handleSubmit}
    />
  );
}
