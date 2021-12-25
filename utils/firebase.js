const EventsRealtimeDatabaseUrl = 'https://nextjs-9fc15-default-rtdb.europe-west1.firebasedatabase.app/'

const getEvents = async () => {
  return await fetch(EventsRealtimeDatabaseUrl + "events.json")
		.then((res) => res.json())
		.then((res) => Object.values(res))
};

const getFeaturedEvents = async () => {
  return await getEvents()
};

const getEventById = async (id) => {
  return await fetch(EventsRealtimeDatabaseUrl + "events.json")
		.then((res) => res.json())
		.then((res) => res[id])
};

function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export { getEvents, getFilteredEvents, getFeaturedEvents, getEventById };