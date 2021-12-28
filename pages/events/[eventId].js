import React from 'react'

import Head from 'next/head'
import useSWR from 'swr'

import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventSummary from '../../components/event-detail/event-summary'
import { getEventById, getEvents } from '../../utils/firebase'

const EventDetailPage = ({ cachedEvent }) => {
    const { data: event } = useSWR(['api/events', cachedEvent.id], () => getEventById(cachedEvent.id), {
        fallbackData: cachedEvent
    })
    if (!event) {
        return <p>No event found!</p>
    }

    return (
        <>
            <Head>
                <title>{event.title}</title>
            </Head>
            <EventSummary event={event} />
            <EventLogistics event={event} />
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
            cachedEvent: event
        },
        revalidate: 30
    }
}

export async function getStaticPaths(context) {
    const data = await getEvents()

    console.log(data)

    return {
        paths: data.map(({ id }) => ({ params: { eventId: id } })),
        fallback: false
    }
}

export default EventDetailPage
