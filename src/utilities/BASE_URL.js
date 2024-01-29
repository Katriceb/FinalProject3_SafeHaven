// This is the base path of the Express route that we'll define
const DEV_MODE = location.href.includes('localhost')
const BASE_URL = DEV_MODE ? 'http://localhost:3001' : '';

export default BASE_URL