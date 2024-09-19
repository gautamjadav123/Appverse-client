import React from "react";
import GamesHeader from "../../../component/Header/GamesHeader";
import Searchbox from "../../../component/Search-box/Searchbox";
import { Box } from "@mui/material";
import GameSearchbox from "../../../component/Search-box/GameSearchBox";
import GameAppCard from "./AppMainPage.js/GameAppCard";

function GameApp() {
  return (
    <>
      <Box>
        <GamesHeader />
      </Box>
      <Box sx={{ bgcolor: "#000" }}>
        <GameSearchbox />
      </Box>
      <Box>
        <GameAppCard />
      </Box>
    </>
  );
}

export default GameApp;
