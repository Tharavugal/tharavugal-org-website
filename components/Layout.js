import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            தரவுகள்.org
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
      <Box p={3}>{children}</Box>
      <footer>
        <Box
          textAlign="center"
          sx={{ bgcolor: "text.primary", color: "white", p: 3 }}
        >
          © 2023 Tharavugal.org
        </Box>
      </footer>
    </>
  );
}
