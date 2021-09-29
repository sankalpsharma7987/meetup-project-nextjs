import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

const HomePage = (props) => {
  //   const [loadedData, setLoadedData] = useState([]);

  //   useEffect(() => {
  //     //Simulate experience of fetching and loading data in loadedData state
  //     // Assume DUMMY_MEETUPS data was fetched from an API
  //     /*This implementation will render an empty meetup list in the page source code as the page, when pre-rendered by NextJS, will not have load data in loadedData state
  //       As this page is pre-rendered and send to the client, the browser will then run the useEffect after the page is rendered for the first time in order to  load data.
  //       Thus the meetups data is not pre-rendered and send to the client by NextJS will this implementation*/
  //     setLoadedData(DUMMY_MEETUPS);
  //   }, []);

  /*This implementation will result pre-rendering of meetups data, by NextJS on the server side during the build process, before sending it to the client browser.
    Thus the meetups list will not be empty.
    */
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // revalidate helps in Incremental Static Generation. Number of seconds after which NextJS will pre-render this page by fetching new values from the API in order to return any subsequent page request with updated data.
    revalidate: 600,
  };
}
export default HomePage;
