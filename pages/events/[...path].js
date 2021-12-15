import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../utils/data";

import EventList from "../../components/EventList";

const PortfolioListPage = () => {
  const router = useRouter();
  // const id = router?.query?.eventId || "..."

  const filterData = router?.query?.path;

  if (!filterData) {
    return <p>Loading...</p>;
  }

  const [filteredYear, filteredMonth] = filterData;

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth)) {
    return <p>Invalid filter, please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({year:numYear, month:numMonth})

  console.log(filteredEvents);

  return (
    <div>
      <h3>Filtered events</h3>
      {filteredEvents?.length > 0 ?? <p>No events found!</p>}
      <EventList events={filteredEvents} />
    </div>
  );
};

export default PortfolioListPage;
