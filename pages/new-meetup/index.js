import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
};

export default NewMeetupPage;
