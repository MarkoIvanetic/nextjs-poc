import React from 'react'
import Link from 'next/link'
import { getFeaturedEvents } from '../../utils/data'
import EventList from '../../components/EventList'

const EventsPage = () => {
	const featuredEvents = getFeaturedEvents()

	return (
		<div>
			<h2>Events page</h2>
			<div>
				<h3>Featured events:</h3>
				<EventList events={featuredEvents}/>
			</div>
		</div>
	)
}

export default EventsPage
