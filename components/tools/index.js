import { Box, Divider, Typography } from '@mui/material';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';

import ToolBox from './ToolBox';

export default function Tools() {
  return (
    <Box p={1}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <ChevronRightIcon /> Tools
      </Typography>
      <Divider />

      <Typography
        variant="subtitle1"
        sx={{ display: 'flex', alignItems: 'center', mt: 2 }}
      >
        Primary
      </Typography>
      <Divider />

      <Box
        py={2}
        sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}
      >
        <ToolBox icon={ExploreOutlinedIcon} label="Explore" path="/explore" />
        <ToolBox
          icon={InsertChartOutlinedTwoToneIcon}
          label="Visualizer"
          path="/visualizer"
        />
        <ToolBox icon={ScienceOutlinedIcon} label="Research" path="/research" />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{ display: 'flex', alignItems: 'center', mt: 2 }}
      >
        Health
      </Typography>
      <Divider />

      <Box
        py={2}
        sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}
      >
        <ToolBox
          icon={FastfoodIcon}
          label="Food Ingredients"
          path="/food-ingredients"
        />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        Thamizhl
      </Typography>
      <Divider />

      <Box
        py={2}
        sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}
      >
        <ToolBox
          icon={ImportContactsIcon}
          label="Thamizhl Dictionary"
          path="/thamizhl-dictionary"
        />
        <ToolBox
          icon={BookOutlinedIcon}
          label="Thirukkural"
          path="/thirukkural"
        />
        <ToolBox
          icon={CalendarMonthOutlinedIcon}
          label="Thamizhl Calendar"
          path="/thamizhl-calendar"
        />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        Others
      </Typography>
      <Divider />

      <Box
        py={2}
        sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}
      >
        <ToolBox
          icon={PushPinOutlinedIcon}
          label="On This Day"
          path="/on-this-day"
        />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        Environment
      </Typography>
      <Divider />

      <Box
        py={2}
        sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}
      >
        <ToolBox
          icon={WaterDropOutlinedIcon}
          label="Water Bodies"
          path="/water-bodies"
        />
      </Box>
    </Box>
  );
}
