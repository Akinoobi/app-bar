import "./App.css";

import { Box, createTheme, Grid, Stack, ThemeProvider } from "@mui/material";
import { DefaultLayout } from "./component/DefaultLayout";
import { ApexChart } from "./component/ApexChart";

function App() {
  const mode = "light"
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
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={3}>
              <ApexChart />
            </Grid>
          </Grid>
          {/* <Feed /> */}
          {/* <Rightbar /> */}
        </Stack>
        {/* <Add /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
