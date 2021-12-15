import React from 'react'
import Link from 'next/link'
import { getFeaturedEvents } from '../../utils/data'

const EventsPage = () => {
	const featuredEvents = getFeaturedEvents()

	return (
		<div>
			<h2>Events page</h2>
			<div>
				<h3>Featured events:</h3>
				<ul>
					{featuredEvents.map((event) => {
						return (
							<li key={event.slug}>
								<Link href={{ pathname: 'events/[slug]', query: { slug: event.slug } }}>{event.title}</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default EventsPage
