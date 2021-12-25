import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../utils/firebase'

import EventList from '../../components/EventList'

function formatParams(paramsArr) {
	const filteredYear = parseInt(paramsArr[0])
	const filteredMonth = parseInt(paramsArr[1])

	if (paramsArr.length > 2) {
		console.warn('Extra query params not supported! Expected 1 or 2, found: ' + paramsArr.length)
	}

	if (isNaN(filteredYear) || isNaN(filteredMonth)) {
		throw new Error('Invalid filter, please adjust your values! Could not convert items from ' + JSON.stringify(paramsArr) + ' to string!')
	}

	return {
		filteredYear,
		filteredMonth
	}
}

const PortfolioListPage = ({ filteredEvents }) => {
	return (
		<div>
			<h3>Filtered events</h3>
			{filteredEvents?.length > 0 ?? <p>No events found!</p>}
			<EventList events={filteredEvents} />
		</div>
	)
}

export async function getServerSideProps(context) {
	const { filteredYear, filteredMonth } = formatParams(context.params.path)

	const filteredEvents = await getFilteredEvents({ filteredYear, filteredMonth })

	return {
		props: { filteredEvents }
	}
}

export default PortfolioListPage
