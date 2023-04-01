import React from "react";
import MeetupItem from "../../components/meetups/MeetupItem";

const Dummy_Data = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://techboomers.com/wp-content/uploads/2017/11/sites-like-meetup-h.jpg",
    address: "Mashifane park, 241 E-block, Burgersfort",
    description:
      "this is a first, amazing meetup ehich you definetely should not miss",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://techboomers.com/wp-content/uploads/2017/11/sites-like-meetup-h.jpg",
    address: "Mashifane park, 241 E-block, Burgersfort",
    description:
      "this is a first, amazing meetup ehich you definetely should not miss",
  },
];

const AllMeetupsPage = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {Dummy_Data.map((meetup) => (
          <MeetupItem
            address={meetup.address}
            key={meetup.id}
            description={meetup.description}
            title={meetup.title}
            image={meetup.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default AllMeetupsPage;
