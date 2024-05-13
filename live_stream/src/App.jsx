import { Profiler, useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import DisplayPodcast from "./pages/DisplayPodcast";
import Profile from "./pages/Profile";
import PodcastDetails from "./pages/PodcastDetails";
import Videoplayer from "./components/Videoplayer";

const Container = styled.div`
  background: ${({ theme }) => theme.bgLight};
  display:flex;
  overflow-x:hidden;
  width: 100%;
  height: 100vh;
`;

const Frame = styled.div`
display:flex;
flex-direction:column;
flex:3;
`;

function App() {
  const [darkmode, setdarkmode] = useState(true);
  const [menuopen, setmenuopen] = useState(true);
  const [videoId, setVideoId] = useState(null)

  return (
    <ThemeProvider theme={darkmode ? darkTheme:lightTheme}>
      <BrowserRouter>
      <Container>
      {menuopen &&(
      <Sidebar menuopen={menuopen} setmenuopen={setmenuopen} setdarkmode={setdarkmode} darkmode={darkmode}/>
      )}
      <Frame>
        <Navbar menuopen={menuopen} setmenuopen={setmenuopen}/>
        <Routes>
          <Route path='/' exact element={<Dashboard setVideoId={setVideoId}/>}/>
          <Route path='/search' exact element={<Search/>}/>
          <Route path='/favourites' exact element={<Favorites/>}/>
          <Route path='/profile' exact element={<Profile/>}/>
          <Route path='/podcast/:id' exact element={<PodcastDetails/>}/>
          <Route path='/showpodcast/:type' exact element={<DisplayPodcast/>}/>
          <Route path='/video' exact element={<Videoplayer setVideoId={setVideoId} videoId={videoId}/>}/>
        </Routes>
        </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
