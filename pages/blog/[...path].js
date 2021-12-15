// catch all route

import React from "react"
import { useRouter } from "next/router"

const BlogAllPage = () => {

  const router = useRouter()
  const paths = router?.query?.path || []

  return <div>
    <h1>Custom blog page</h1>
    <div>
      <h3>This page has query of:</h3>
      <ul>
          {paths.map((query) => {
            return <li key={query}>{query}</li>
          })}
      </ul>
    </div>
  </div>
}

export default BlogAllPage