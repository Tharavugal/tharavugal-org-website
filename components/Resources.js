import { Box, Divider, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Resources() {
  return (
    <Box p={1}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <ChevronRightIcon /> Resources
      </Typography>
      <Divider />
      <Box>
        <ul>
          <li>
            <a href="/work-pipeline">Work Pipeline</a>
          </li>
          <li>
            <a href="/open-discussions">Open Discussions</a>
          </li>
          <li>
            <a href="/translations">Translations</a>
          </li>
          <li>
            <a href="/archival-records">Archival Records</a>
          </li>
          <li>
            <a href="/images">Images</a>
          </li>
          <li>
            <a href="/videos">Videos</a>
          </li>
          <li>
            <a href="/documents">Documents</a>
          </li>
          <li>
            <a href="/contributing-process">Contributing Process</a>
          </li>
          <li>
            <a href="/entities">Entities</a>
          </li>
          <li>
            <a href="/literatures">Literatures</a>
          </li>
        </ul>
      </Box>
    </Box>
  );
}
