import React from "react";
import Card from "../ui/Card";
import styles from "./newMeetupForm.module.css";
import { useRef } from "react";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            placeholder="https://..."
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Addres</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            rows="5"
            required
            id="description"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
