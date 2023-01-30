import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from 'react';
import { DefaultLayout } from './component/DefaultLayout';

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <DefaultLayout />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        {/* <Sidebar setMode={setMode} mode={mode}/> */}
        <h1>atay</h1>
          {/* <Feed /> */}
          {/* <Rightbar /> */}
        </Stack>
        {/* <Add /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
