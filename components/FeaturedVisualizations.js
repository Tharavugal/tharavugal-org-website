import { Box, Card, Divider, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';
import useAlert from '@/hooks/useAlert';
import { format } from 'date-fns-tz';
import { endOfMonth, startOfMonth } from 'date-fns';

function FeaturedBox({ data }) {
  const router = useRouter();
  const showAlert = useAlert();
  const queryStr = btoa(JSON.stringify(data.filters));

  return (
    <Box
      mt={2}
      onClick={() => {
        if (data.disabled) {
          showAlert('default', 'Currently, no data available');
          return;
        }
        router.push('/visualizer?q=' + queryStr);
      }}
    >
      <Card
        variant="outlined"
        sx={{
          borderColor: data.severity,
          p: 3,
          userSelect: 'none',
          cursor: 'pointer',
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ color: data.severity }}
        >
          {data.title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ textAlign: 'center', color: 'text.secondary' }}
        >
          {data.subtitle}
        </Typography>
      </Card>
    </Box>
  );
}

export default function FeaturedVisualizations() {
  const currentMonth = format(new Date(), 'MM', {
    timeZone: Intl.DateTimeFormat().resolvedOptions(),
  });
  const currentYear = format(new Date(), 'yyyy', {
    timeZone: Intl.DateTimeFormat().resolvedOptions(),
  });
  const list = [
    {
      title: '🐘 Elephant Deaths this Year',
      severity: 'error.main',
      filters: {
        category: 'Elephant Death',
        from: new Date(`${currentYear}-01-01`),
        to: new Date(),
        locations: [],
        view: 'Date',
        chartType: 'Bar Chart',
      },
    },
    {
      title: '🛣️ Road Accidents this Month',
      subtitle: '(Week Day View)',
      severity: 'error.main',
      filters: {
        category: 'Road Accident',
        from: startOfMonth(new Date()),
        to: endOfMonth(new Date()),
        locations: [],
        view: 'Week',
        chartType: 'Doughnut Chart',
      },
    },
    {
      title: '🛵 E-Bike Explosions this Year',
      severity: 'warning.main',
      filters: {},
      disabled: true,
    },
    {
      title: '🔥 Fire Accidents',
      subtitle: '(Months View)',
      severity: 'warning.main',
      filters: {
        category: 'Fire Accident',
        from: new Date(`01-01-${currentYear}`),
        to: new Date(),
        locations: [],
        view: 'Month',
        chartType: 'Area Chart',
      },
    },
    {
      title: '🧒 Children Sexual Abuses',
      severity: 'primary.main',
      filters: {},
      disabled: true,
    },
  ];

  return (
    <Box p={1}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <ChevronRightIcon /> Visualizations (Featured)
      </Typography>
      <Divider />
      <Box p={2}>
        {list.map((l, i) => (
          <FeaturedBox key={i} data={l} />
        ))}
      </Box>
    </Box>
  );
}
