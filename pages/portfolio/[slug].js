import React from "react"
import { useRouter } from "next/router"

const PortfolioListPage = () => {
    const { query } = useRouter()

  return <div>
    <h1>Portfolio project page {query.slug}</h1>
  </div>
}

export default PortfolioListPage