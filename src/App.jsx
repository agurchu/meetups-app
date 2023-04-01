import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AllMeetupsPage from "./assets/pages/AllMeetups";
import NewMeetupPage from "./assets/pages/NewMeetup";
import FavoritesPage from "./assets/pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
