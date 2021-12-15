import React from 'react'
import Link from 'next/link'
import MainHeader from './main-header'

const Layout = ({ children }) => {
	return (
		<>
			<MainHeader />
			<main>
				{children}
			</main>
		</>
	)
}

export default Layout
