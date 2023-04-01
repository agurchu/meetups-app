import React from "react";
import MeetupItem from "./MeetupItem";

const MeetupLists = ({ meetups }) => {
  return (
    <ul>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          address={meetup.address}
          description={meetup.description}
          title={meetup.title}
          id={meetup.id}
          image={meetup.image}
        />
      ))}
    </ul>
  );
};

export default MeetupLists;
