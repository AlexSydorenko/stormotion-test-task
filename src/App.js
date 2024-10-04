import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Settings from "./pages/settings/settings";
import Game from "./pages/game/game";

import './App.css';

function App() {
  const [gameSettings, setGameSettings] = useState({
    totalMatches: 25,
    maxAllowedToTake: 3,
    whoseTurn: 'you'
  });

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/settings" 
            element={
              <Settings 
                gameSettings={gameSettings}
                setGameSettings={ (settings) => setGameSettings(settings) } />} />
          
          <Route 
            path="/game" 
            element={
              <Game 
                gameSettings={gameSettings}
                setGameSettings={ (settings) => setGameSettings(settings) } />} />

          <Route path="*" element={<Navigate to={"/settings"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
