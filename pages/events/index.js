import React, { useEffect } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR, { SWRConfig, useSWRConfig } from 'swr'

import EventSearch from '../../components/event-detail/event-search'
import EventList from '../../components/EventList'
import { getEvents } from '../../utils/firebase'

const EventsPage = ({ events }) => {
    const { data } = useSWR('api/events', () => getEvents(), { fallbackData: events })

    const router = useRouter()

    function findEventHadler(year, month) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return (
        <>
            <Head>
                <title>NextJS Events</title>
            </Head>
            <EventSearch onSearch={findEventHadler} />
            <EventList events={data} />
        </>
    )
}

export async function getStaticProps() {
    const events = await getEvents()

    return {
        props: {
            events
        },
        revalidate: 60
    }
}

export default EventsPage
