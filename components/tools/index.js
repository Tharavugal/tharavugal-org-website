import { Box } from '@mui/material';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import ToolBox from './ToolBox';

export default function Tools() {
  return (
    <Box
      py={2}
      sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}
    >
      <ToolBox
        icon={InsertChartOutlinedTwoToneIcon}
        label="Visualizer"
        path="/visualizer"
      />
      <ToolBox
        icon={ImportContactsIcon}
        label="Thamizhl Dictionary"
        path="/thamizhl-dictionary"
      />
      <ToolBox icon={ExploreOutlinedIcon} label="Explore" path="/explore" />
      <ToolBox icon={ScienceOutlinedIcon} label="Research" path="/research" />
      <ToolBox icon={BookOutlinedIcon} label="Thirukural" path="/thirukural" />
      <ToolBox
        icon={PushPinOutlinedIcon}
        label="On This Day"
        path="/on-this-day"
      />
      <ToolBox
        icon={CalendarMonthOutlinedIcon}
        label="Thamizhl Calendar"
        path="/thamizhl-calendar"
      />
    </Box>
  );
}
