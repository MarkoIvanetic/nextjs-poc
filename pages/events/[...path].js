import React from "react"
import { useRouter } from "next/router"

const PortfolioListPage = () => {
    const router = useRouter()
    // const id = router?.query?.eventId || "..."

  return <div>
      <h3>Filtered events</h3>
    {/* <h1>Specific event page {id}</h1> */}
  </div>
}

export default PortfolioListPage