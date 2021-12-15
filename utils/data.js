const DUMMY_EVENTS = [
  {
    id: "e0",
    title: "Programming for everyone",
    slug: "getting-started-with-nextjs",
    image: "images/code_1.jpg",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-01-12",
    image: "images/code_1.jpg",
    isFeatured: false,
  },
  {
    id: "e1",
    title: "Programming for everyone",
    slug: "getting-started-with-nextjs",
    image: "images/code_1.jpg",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/code_1.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    slug: "getting-started-with-nextjs2",
    image: "images/code_2.jpg",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    slug: "getting-started-with-nextjs3",
    image: "images/code_3.jpg",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    slug: "getting-started-with-nextjs4",
    image: "images/code_4.jpg",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    isFeatured: true,
  },
];

const getEvents = () => {
  return DUMMY_EVENTS;
};

const getFeaturedEvents = () => {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
};

const getEventBySlug = (slug) => {
  return DUMMY_EVENTS.find((event) => event.slug === slug);
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

export { getEvents, getFilteredEvents, getFeaturedEvents, getEventBySlug };
