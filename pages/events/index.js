import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../../utils/data";
import EventList from "../../components/EventList";
import EventSearch from "../../components/event-detail/event-search";

const EventsPage = ({ featuredEvents }) => {
  const router = useRouter();

  function findEventHadler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventHadler} />
      <EventList events={featuredEvents} />
    </>
  );
};

export async function getStaticProps() {
  const featuredEvents = getFeaturedEvents();

  console.log(featuredEvents);

  return {
    props: {
      featuredEvents
    }
  }
}

export default EventsPage;
