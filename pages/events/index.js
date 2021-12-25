import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getEvents } from '../../utils/data'
import EventList from '../../components/EventList'
import EventSearch from '../../components/event-detail/event-search'
import useSWR from 'swr'

const EventsPage = ({ featuredEvents }) => {

  const { data = featuredEvents, error, isValidating} = useSWR("events", () => getEvents())

	const router = useRouter()

	function findEventHadler(year, month) {
		const fullPath = `/events/${year}/${month}`
		router.push(fullPath)
	}

  if (isValidating) {
    return <span>Loading...</span>
  }

	return (
		<>
			<EventSearch onSearch={findEventHadler} />
			<EventList events={data} />
		</>
	)
}

export async function getStaticProps() {
	const featuredEvents = await getEvents()

	return {
		props: {
			featuredEvents,
		},
	}
}

export default EventsPage
