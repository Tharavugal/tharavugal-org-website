import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import ModelActionMenu from '../../ModelActionMenu';
import Edit from './Edit';
import APIClient from '@/utils/APIClient';
import { EVENTS_STATUS } from '@/constants';

export default function List({ data = [], mutate }) {
  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell(params) {
        return (
          <ModelActionMenu
            url="/api/events"
            row={params.row}
            Edit={Edit}
            actions={[
              {
                label: 'Publish',
                handler: () => {
                  APIClient.post(
                    '/api/events',
                    { id: params.row.id, status: EVENTS_STATUS.PUBLISHED },
                    true
                  );
                },
              },
            ]}
            mutate={mutate}
          />
        );
      },
    },
  ];

  return (
    <Box>
      <DataGrid rows={data} columns={columns} autoHeight />
    </Box>
  );
}
