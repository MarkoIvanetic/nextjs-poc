import React from 'react'
import { useRouter } from 'next/router'

import { getEventById, getEvents } from '../../utils/firebase'

import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"

const EventDetailPage = ({event}) => {

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

export async function getStaticProps(context) {

	const event = await getEventById(context.params.eventId)

    return {
        props: {
            event
        }
    }
}

export async function getStaticPaths(context) {
    console.log("Rerendered!")

    const data = await getEvents()

	console.log(data);

    return {
        paths: data.map(({id}) => {
			return { params: {eventId: id}}
		}),
		fallback: true
    }
}

export default EventDetailPage
