import { AppBar, Toolbar, Typography } from "@mui/material";

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
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
