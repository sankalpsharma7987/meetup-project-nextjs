import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meetup"
      description="First Meetup"
      address="Some 5 Street, Some Way"
    />
  );
};

export default MeetupDetails;
