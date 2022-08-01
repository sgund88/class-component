import React from "react";
import { Box, Toolbar } from "@mui/material";
import AppRouter from "./auth/AppRouter";

function App() {
  return (
    <Box component="main">
      <Toolbar />
      <AppRouter />
    </Box>
  );
}

export default App;
