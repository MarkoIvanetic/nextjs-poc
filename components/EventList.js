import React from 'react'
import Link from 'next/link'
import EventItem from './EventItem'
import classes from "./EventList.module.css"


const EventList = ({ events }) => {
	return (
		<ul className={classes.list}>
			{events.map((event) => (
				<EventItem key={event.slug} event={event} />
			))}
		</ul>
	)
}

export default EventList
