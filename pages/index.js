import { Box, Divider, Paper, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "70fr 30fr", columnGap: 2 }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ChevronRightIcon /> Events
          </Typography>
          <Divider />
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ChevronRightIcon /> Tools
          </Typography>
          <Divider />
        </Paper>
      </Box>
    </Layout>
  );
}
