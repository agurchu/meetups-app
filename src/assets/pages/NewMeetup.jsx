import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  function handleAddMeetup(meetupData) {
    fetch("https://react-first-data-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </div>
  );
};

export default NewMeetupPage;
