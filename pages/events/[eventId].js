import React from 'react'
import { useRouter } from 'next/router'

import { getEventBySlug } from '../../utils/data'

import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"

const EventDetailPage = () => {
	const router = useRouter()
	const id = router?.query?.eventId || '...'

	const event = getEventBySlug(id)

	if (!event) {
		return <p>No event found!</p>
	}

	return (
		<>
			<EventSummary event={event}/>
			<EventLogistics event={event}/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	)
}

export default EventDetailPage
