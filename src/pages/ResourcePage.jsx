/*
    How do we get a single resource based on the id in the URL?
        options
            - Make a route on the backend for getting a single resource
            - Store all resources in global state when app starts up, then get it from there
                options for managing global state
                    localStorage    (vanilla javascript)
                    useContext     (react hook)
                    jotai       (npm i jotai)
*/

import { useParams } from "react-router-dom"

export default function ResourcePage() {
    const params = useParams()

  return (
    <div>
        {params.id}
    </div>
  )
}