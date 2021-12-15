import React from 'react'
import { useRouter } from 'next/router'
import { getEventBySlug } from '../../utils/data'

const PortfolioListPage = () => {
	const router = useRouter()
	const id = router?.query?.eventId || '...'

	return (
		<div>
			<h1>Specific event page {id}</h1>
		</div>
	)
}

export default PortfolioListPage
