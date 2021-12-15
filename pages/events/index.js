import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../../utils/data";
import EventList from "../../components/EventList";
import EventSearch from "../../components/event-detail/event-search";

const EventsPage = () => {
  const featuredEvents = getFeaturedEvents();
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

export default EventsPage;
