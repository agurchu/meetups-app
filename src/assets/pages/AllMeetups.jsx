import React, { useEffect, useState } from "react";

import MeetupLists from "../../components/meetups/MeetupLists";

const AllMeetupsPage = () => {
  const [loading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://react-first-data-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let meetups = [];

        for (let key in data) {
          const meetup = { id: key, ...data[key] };
          meetups.push(meetup);
        }

        setLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupLists meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
