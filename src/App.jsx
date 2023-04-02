import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./App.css";
import AllMeetupsPage from "./assets/pages/AllMeetups";
import NewMeetupPage from "./assets/pages/NewMeetup";
import FavoritesPage from "./assets/pages/Favorites";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
