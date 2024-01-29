import { getAllResources } from "../utilities/resources-api.js"
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

export default function ResourceHistoryPage() {

    const [resources, setResources] = useState([])

    useEffect(()=>{
        loadResources()
    },[])

    async function loadResources() {
        let data = await getAllResources()
        setResources(data)
    }

    return (
        <>
            {resources.map(resource => {

                return (
                    <div className="resource" key={resource.id}>
                        <h1>{resource.name}</h1>
                        {resource.services.map((service, sIdx) => {
                            return <div key={sIdx}>{service}</div>
                        })}
                        <Link to={`/resource/${resource._id}`}>See more &#9658;</Link>
                    </div>
                )
            })}
        </>
    )
}