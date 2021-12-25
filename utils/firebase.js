const EventsRealtimeDatabaseUrl = 'https://nextjs-9fc15-default-rtdb.europe-west1.firebasedatabase.app/'

const fetchEvents = async () => {
  return await fetch(EventsRealtimeDatabaseUrl + "events.json")
		.then((res) => res.json())
};

const getEvents = async () => {
  return await fetchEvents().then((res) => Object.values(res))
};

const getEventById = async (id) => {
  return await fetchEvents().then((res) => res[id])
};

const getFilteredEvents = async (dateFilter) => {
  const events = await getEvents()

  const { filteredYear, filteredMonth } = dateFilter;

  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === filteredYear && eventDate.getMonth() === filteredMonth - 1
    );
  });
};

export { getEvents, getFilteredEvents, getEventById };