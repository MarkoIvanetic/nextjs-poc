import React from "react"
import { useRouter } from "next/router"

const ClientPortfolio = () => {
    const { query: {id} } = useRouter()

  return <div>
    <h1>Client page</h1>
    <p>{id}</p>
  </div>
}

export default ClientPortfolio