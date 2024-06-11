import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Feed from "./Feed";
import { Box, Container, Stack } from "@mui/material";


function App() {


  return (
    <Box>

    <NavBar />

    <Stack direction="row" margin={0.6} spacing={2} justifyContent="space-between">
      <SideBar />
      <Feed />
      <RightBar />

    </Stack>
    </Box>

  );
}

export default App;
