import React from 'react'
import Link from 'next/link'

import classes from './EventItem.module.css'
import Button from './Button'

import AddressIcon from './icons/address-icon'
import ArrowRightIcon from './icons/arrow-right-icon'
import DateIcon from './icons/date-icon'

const EventItem = ({ event }) => {
	const date = new Date(event.date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	return (
		<li className={classes.item}>
			<img src={'/' + event.image} alt={event.title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{event.title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{date}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>Matije Slatinskog 4</address>
					</div>
				</div>
				<div className={classes.itemButton}>
					<Button href={{ pathname: '/events/[id]', query: { id: event.id } }}>
						<span>Explore event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	)
}

export default EventItem
