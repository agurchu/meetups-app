import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import AllMeetupsPage from "./assets/pages/AllMeetups";
import NewMeetupPage from "./assets/pages/NewMeetup";
import FavoritesPage from "./assets/pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
