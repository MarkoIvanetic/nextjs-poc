import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"

const ClientsPage = () => {

     const router = useRouter()

    const loadProject = () => {
        // router.push("/clients/project_a")
        router.push({
            pathname: "/clients/[id]",
            query: {id: "project_a"}
        })
    }

	return (
		<div>
			<h1>Clients page</h1>
			<ul>
				<li>
					<Link href='/clients/maximilain'>Maximilain</Link>
				</li>
				<li>
					<Link href='/clients/manu'>Manuel</Link>
				</li>
				<li>
					<Link
						href={{
							pathname: '/clients/[id]',
							query: { id: 'Marko' },
						}}>
						Marko
					</Link>
				</li>
			</ul>
            <div>
                <button onClick={loadProject}>Load Project A</button>
            </div>
		</div>
	)
}

export default ClientsPage
