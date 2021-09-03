import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some adress 5, 12345 Some City",
    descriptioon: "This is a first Meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some adress 10, 12345 Other City",
    descriptioon: "This is a second Meetup!",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setLoadedMeetups(DUMY_MEETUPS)
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
