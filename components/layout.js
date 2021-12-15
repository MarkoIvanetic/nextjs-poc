import React from 'react'
import Link from 'next/link'

const navigationStyle = {
    background: "#d9dddc",
    padding: "10px 5px"
}

const mainContainerStyle = {
    marginTop: "15px",
    padding: "10px 5px"
}

const Layout = ({ children }) => {
	return (
		<div>
			<div style={navigationStyle}>
				<h1>Project name placeholder</h1>
				<ul>
					<li>
						<Link href='/events'>Events</Link>
					</li>
				</ul>
			</div>
            <div style={mainContainerStyle}>
			    {children}
            </div>
		</div>
	)
}

export default Layout
