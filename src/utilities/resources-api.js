import BASE_URL from './BASE_URL.js'

async function getAllResources() {
    console.log(BASE_URL)
    const res = await fetch(BASE_URL + '/api/resource')
    const data = await res.json()
    return data
}



export {
    getAllResources
}